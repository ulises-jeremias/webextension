"use strict"

browser.runtime.onMessage.addListener(async message => {
  const contentManager = new ContentManager(message);
  await contentManager[message.command]();
});
