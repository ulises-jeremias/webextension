"use strict"

const url = 'https://www.diarioregistrado.com';
const path = '/buscar'
const param = 'q';

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
  console.log("message: ", message);
  const {wordToSearch} = message;
  const wordFetcher = new WordFetcher({base, path, paramName});

  return await wordFetcher
    .searchWord(wordToSearch)
    .then(elements => elements.map(elem => {
      // should return an object of the form {title: "", link: ""}
      return elem;
    }))
    .catch(error => {
      Promise.reject(new NetworkError(error.message));
    });
});
