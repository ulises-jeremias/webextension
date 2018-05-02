"use strict"

const contentManager = new ContentManager();

browser.runtime.onMessage.addListener(async message => {
  message.tagName && contentManager.buildPanel(message.tagName);
  contentManager[message.command]();
});
