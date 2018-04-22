"use strict"

browser.runtime.onMessage.addListener(async message => {
  const { tagName } = message;

  const container = document.createElement('div');
  const close = document.createElement('a');
  const builder = new ContentHandlerBuilder();

  builder
    .setContainerElement(container)
    .setCloseElement(close)
    .setTag(tagName)
    .setSeparator(" ");

  const contentHandler = builder.build();

  contentHandler
    .titlesSearch(contentHandler.wordToFetch())
    .then(container => {
      document.querySelector("body").appendChild(container);
      container.style.height = "100%";
    })
    .catch(error => {
      return Promise.reject(new Error(error.message));
    });
});
