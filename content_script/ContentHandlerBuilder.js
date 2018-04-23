/**
 * @fileoverview The ContentBuilder class definition
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */

"use strict"

/**
 * This class models a builder which allows you to create instances of the
 * ContentHandler class
 */
class ContentHandlerBuilder {
  constructor() {
    this.container = 'div';
    this.separator = " ";
    this.tagName = 'h1';
  }

  setContainer(container) {
    this.container = container;

    return this;
  }

  setSeparator(separator) {
    this.separator = separator;

    return this;
  }

  setTag(tag) {
    this.tagName = tag;

    return this;
  }

  /**
   * Build the resulting instance of the ContentHandler class
   *
   * @return {ContentHandler}
   */

  build() {
    const elements = document.getElementsByTagName(this.tagName);
    const container = document.getElementById('popup_search') || document.createElement(this.container);

    container.setAttribute("id", "popup_search");
    container.setAttribute("class", "overlay");

    return new ContentHandler(elements, container, this.separator);
  }
}
