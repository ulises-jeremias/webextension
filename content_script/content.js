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

console.log(contentHandler.container.id);
console.log(contentHandler.container.className);
console.log(contentHandler.close.id);
