"use strict";

function onError(error) {
  console.log(error);
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  tabs.forEach(tab => {
    console.log(tab);
    browser.tabs.sendMessage(
      tab.id,
      {greeting: "Hi from background script"}
    ).then(response => {
      console.log("Message from the content script:");
      console.log(response.response);
    }).catch(onError);
  });
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch(onError);
});
