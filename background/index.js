"use strict"

const backgroundManager = new BackgroundManager({
  base: 'https://scholar.google.com',
  path: '/scholar',
  paramName: 'q',
  tagName: 'h1',
});

backgroundManager.setCurrentState(backgroundManager.getStates().stopped);

browser.browserAction.onClicked.addListener(async tab => {
  return await backgroundManager.sendMessage(tab)
    .catch(error => {
      Promise.reject(new Error(`NetworkError: ${error.message}`));
    });
});

browser.runtime.onMessage.addListener(async message => {
  return await backgroundManager.handleMessage(message)
    .catch(error => {
      Promise.reject(new Error(`NetworkError: ${error.message}`));
    });
});
