"use strict"

const base = 'https://scholar.google.com';
const path = '/scholar'
const paramName = 'q';

browser.browserAction.onClicked.addListener(async tab => {
  await browser.tabs.executeScript(tab.id, {file: "/content_script/content.js"})
  .then(() => {
    browser.tabs.sendMessage(tab.id, {tagName: 'h1'});
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
});

browser.runtime.onMessage.addListener(async message => {
  const {wordToFetch} = message;
  const wordFetcher = new WordFetcher({base, path, paramName});

  return await wordFetcher.searchWord(wordToFetch)
    .then(htmlDOM => {
      return htmlDOM.getElementsByClassName("gs_rt");
    })
    .then(elements => Array.from(elements).map(elem => elem.lastChild))
    .then(elements => elements.map(elem => {
      return {title: elem.textContent, href: elem.href};
    }))
    .catch(error => {
      Promise.reject(new Error(`NetworkError: ${error.message}`));
    });
});
