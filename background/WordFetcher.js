"use strict"

class WordFetcher {
  constructor({ base = "", path = "/", paramName = "param" }) {
    this.base = base;
    this.path = path;
    this.paramName = paramName;
  }

  parseHtml(html) {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html");
  }

  searchWord(word) {
    return fetch(`${this.base}${this.path}?${this.paramName}=${word}`)
    .then(response => {
      if (response.ok) {
        return response.text();
      }

      return Promise.reject(new HttpError(`HTTP error: ${response.status}`));
    })
    .then(html => this.parseHtml(html))
    .then(htmlDOM => {
      return htmlDOM.getElementsByClassName("title");
    })
    .catch(error => {
      Promise.reject(new NetworkError(error.message));
    });
  }
}
