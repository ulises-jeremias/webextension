"use strict"

class ContentHandler {
  constructor(wordsToFetch, container, close, separator) {
    this.container = container;
    this.close = close;
    this.wordsToFetch = wordsToFetch;
    this.separator = separator;
  }  
}
