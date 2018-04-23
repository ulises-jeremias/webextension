"use strict"

const base = 'https://scholar.google.com';
const path = '/scholar'
const paramName = 'q';

let running = false;

browser.browserAction.onClicked.addListener(async tab => {
  await browser.tabs.sendMessage(tab.id, {
    running: running,
    tagName: 'h1',
  });

  running = !running;
});

browser.runtime.onMessage.addListener(async message => {
  const { wordToFetch } = message;
  const wordFetcher = new WordFetcher({ base, path, paramName });

  return await wordFetcher
    .searchTitlesForWord(wordToFetch)
    .catch(error => {
      Promise.reject(new Error(`NetworkError: ${error.message}`));
    });
});
