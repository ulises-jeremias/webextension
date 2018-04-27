"use strict"

browser.runtime.onMessage.addListener(async message => {
  const contentManager = new ContentManager(message);
  contentManager[message.command]();
});
