"use strict"

browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("message: ", message);
  return;
});
