"use strict"

browser.browserAction.onClicked.addListener(tab => {
  browser.tabs.executeScript(tab.id, {
    file: "/content_script/content.js",
  }).then(() => {
    console.log("Success!");
  }).catch(error => {
    console.error(`Error: ${error}`);
  });
});

browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("message: ", message);
  return;
});
