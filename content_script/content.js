"use strict"

const container = document.createElement('div');
const close = document.createElement('a');
const builder = new ContentBuilder();

builder
  .containerElement(container)
  .closeElement(close)
  .tag('h1')
  .separator(" ");

const contentHandler = builder.build();
