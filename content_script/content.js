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

console.log(contentHandler.container);
console.log(contentHandler.container.id);
console.log(contentHandler.container.className);
console.log(contentHandler.close.id);
console.log(contentHandler.wordsToFetch);
console.log(contentHandler.wordToFetch());

// Only for testing and debbuging
document.querySelector("body").appendChild(contentHandler.container);
contentHandler.container.style.height = "100%";
