/**
 * @fileoverwrite The ContentHandler class definition
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */


"use strict"

/**
 * In this class the basic handling of DOM elements is modeled
 *
 */
class ContentHandler {

  /**
   * @constructor
   *
   * @param {HTMLCollection}, wordToFetch
   * @param {HTMLElement}, container
   * @param {string}, separator
   *
   * @return {ContentHandler}
   */
  constructor(wordsToFetch, container, separator = " ") {
    this.container = container;
    this.containerId = container.id;
    this.wordsToFetch = wordsToFetch;
    this.separator = separator;

    this.contentElement = document.getElementById('panel_content') || document.createElement('div');
  }

  appendTitle(titleElement, contentContainer) {
    const {
      title,
      href
    } = titleElement;
    const a = document.createElement('a');

    a.setAttribute("href", href);
    a.innerHTML = title;

    contentContainer.appendChild(a);
  }

  appendCloseElement(close) {
    close.setAttribute("id", "popup_close");
    close.setAttribute("class", "closebtn");
    close.addEventListener("click", function() {
      document.getElementById("popup_search").style.height = "0%";
    });

    close.innerHTML = "&times;";

    this.contentElement.appendChild(close);
    return this.container;
  }

  appendTitles(titles) {
    const contentElement = this.contentElement;

    contentElement.setAttribute("class", "overlay-content");
    contentElement.setAttribute("id", "panel_content");
    $(contentElement).draggable().resizable();

    Array.from(titles).forEach(title => {
      this.appendTitle(title, contentElement);
    });

    this.container.appendChild(contentElement);

    return this.container;
  }

  titlesSearch(wordToFetch) {
    return browser.runtime.sendMessage({
        wordToFetch: wordToFetch
      })
      .then(elements => this.appendTitles(elements))
      .catch(error => {
        return Promise.reject(new Error(error.message));
      });
  }

  wordToFetch() {
    return Array.from(this.wordsToFetch)
      .map(elem => elem.textContent)
      .reduce((fullText, eachText) => fullText + eachText)
      .split(this.separator)
      .reduce((a, b) => (a.length > b.length) ? a : b);
  }

  handle(container) {
    this.contentElement.innerHTML = "";
    this.appendCloseElement(document.createElement('a'));

    return this.titlesSearch(this.wordToFetch())
      .then(panel => {
        container.appendChild(panel);
        panel.style.height = "100%";
      })
      .catch(error => {
        return Promise.reject(new Error(error.message));
      });
  }

  reset() {
    this.container.remove();
  }
}
