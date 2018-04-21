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

console.log(container.id);
console.log(container.className);
console.log(close.id);
