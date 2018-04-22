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
contentHandler.titlesSearch(contentHandler.wordToFetch());

// Only for testing and debbuging
document.querySelector("body").appendChild(contentHandler.container);
contentHandler.container.style.height = "100%";
