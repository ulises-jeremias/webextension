"use strict"

var container = document.createElement('div');
var close = document.createElement('a');
var builder = new ContentHandlerBuilder();

builder
  .setContainerElement(container)
  .setCloseElement(close)
  .setTag('h1')
  .setSeparator(" ");

var contentHandler = builder.build();
contentHandler
  .titlesSearch(contentHandler.wordToFetch())
  .then(container => {
    document.querySelector("body").appendChild(container);
    container.style.height = "100%";
  })
  .catch(error => {
    return Promise.reject(new Error(error.message));
  });
