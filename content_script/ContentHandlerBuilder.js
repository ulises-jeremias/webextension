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
    this.close = document.createElement('span');
    this.container = document.getElementsByTagName('div')[0];
    this.separator = " ";
    this.tagName = 'h1';
  }

  setCloseElement(htmlElement) {
    this.close = htmlElement;

    return this;
  }

  setContainerElement(container) {
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
    const container = this.container;
    const close = this.close;

    container.setAttribute("id", "popup_search");
    container.setAttribute("class", "overlay");

    close.setAttribute("id", "popup_close");
    close.setAttribute("class", "closebtn");
    close.addEventListener("click", function() {
      document.getElementById("popup_search").style.height = "0%";
    });

    close.innerHTML = "&times;";

    container.appendChild(close);

    return new ContentHandler(elements, container, close, this.separator);
  }
}
