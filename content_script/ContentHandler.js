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
    this.wordsToFetch = wordsToFetch;
    this.separator = separator;
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

    this.container.appendChild(close);
    return this.container;
  }

  appendTitles(titles) {
    const container = document.createElement('div');
    container.setAttribute("class", "overlay-content");

    Array.from(titles).forEach(title => {
      this.appendTitle(title, container);
    });

    this.container.appendChild(container);
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
    return this.titlesSearch(this.wordToFetch())
      .then(() => {
        return this.appendCloseElement(document.createElement('a'))
      })
      .then(panel => {
        container.appendChild(panel);
        panel.style.height = "100%";
      })
      .catch(error => {
        return Promise.reject(new Error(error.message));
      });
  }
}
