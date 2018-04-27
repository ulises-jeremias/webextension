"use strict"

const contentManager = new ContentManager();

browser.runtime.onMessage.addListener(async message => {
  contentManager.buildPanel(message.tagName)[message.command]();
});
