"use strict"

class ContentBuilder {
  constructor() {
    this.container = document.getElementsByTagName('div')[0];
    this.close = document.createElement('span');
    this.tagName = 'h1';
    this.separator = " ";
  }

  containerElement(container) {
    this.container = container;
  }

  closeElement(htmlElement) {
    this.close = htmlElement;
  }

  tag(tag) {
    this.tagName = tag;
  }

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
