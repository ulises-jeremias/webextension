"use strict"

browser.runtime.onMessage.addListener(async message => {
  const {tagName} = message;
  const builder = new ContentHandlerBuilder();

  builder
    .setContainer('div')
    .setTag(tagName)
    .setSeparator(" ");

  const contentHandler = builder.build();

  await contentHandler.handle(document.querySelector('body'))
    .catch(error => {
      return Promise.reject(new Error(error.message));
    });
});
