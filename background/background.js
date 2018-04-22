"use strict"

const base = 'https://scholar.google.com';
const path = '/scholar'
const paramName = 'q';

browser.browserAction.onClicked.addListener(async tab => {
  await browser.tabs.executeScript(tab.id, {
    file: "/content_script/content.js",
  }).then(() => {
    console.log("Success!");
  }).catch(error => {
    console.error(`Error: ${error}`);
  });
});

browser.runtime.onMessage.addListener(async function(message, sender, sendResponse) {
  console.log(message);
  const {wordToFetch} = message;
  const wordFetcher = new WordFetcher({base, path, paramName});

  return await wordFetcher
    .searchWord(wordToFetch)
    .then(elements => Array.from(elements).map(elem => {
      // should return an object of the form {title: "", href: ""}
      console.log(elem);
      return {
        title: elem.textContent,
        href: elem.href
      };
    }))
    .catch(error => {
      Promise.reject(new Error(`NetworkError: ${error.message}`));
    });
});
