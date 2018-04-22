"use strict"

class ContentHandler {
  constructor(wordsToFetch, container, close, separator) {
    this.container = container;
    this.close = close;
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
}
