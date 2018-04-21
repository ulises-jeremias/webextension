"use strict"

class ContentHandler {
  constructor(wordsToFetch, container, close, separator) {
    this.container = container;
    this.close = close;
    this.wordsToFetch = wordsToFetch;
    this.separator = separator;
  }

  titlesSearch(wordToFetch) {
    browser.runtime.sendMessage({wordToFetch})
      .then(elements => {
        elements.forEach(elem => {
          let { title, href } = elem;
          let container = document.createElement('div');
          let a = document.createElement('a');

          a.setAttribute("href", href);
          a.innerHTML = title;

          container.setAttribute("class", "overlay-content");
          container.appendChild(a);
          this.container.appendChild(container);
        });
      })
      .catch(error => {
        return Promise.reject(new Error(error.message));
      });
  }

  wordToFetch() {
    var fullTextContent = "";

    Array.from(this.wordsToFetch).forEach(elem => {
      fullTextContent += ` ${elem.textContent}`;
    });

    return fullTextContent
              .split(this.separator)
              .reduce((a, b) => (a.length > b.length) ? a : b);
  }
}
