/**
 * @fileoverview The WordFetcher class definition
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */

"use strict"

class WordFetcher {

  /**
   * @constructor
   *
   * @param {string}, url base
   * @param {string}, url path
   * @param {string}, param name
   *
   * @return {WordFetcher}
   */
  constructor({ base = "", path = "/", paramName = "param" }) {
    this.base = base;
    this.path = path;
    this.paramName = paramName;
  }

  /**
   * @method Parse html from string
   *
   * @param html
   * @return
   */
  parseHtml(html) {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html");
  }

  /**
   * This method returns the result of searching for a word on a given page
   *
   * @param {string} word
   * @return {Promise}
   */
  searchWord(word) {
    return fetch(`${this.base}${this.path}?${this.paramName}=${word}`)
    .then(response => {
      if (response.ok) {
        return response.text();
      }

      return Promise.reject(new HttpError(`HTTP error: ${response.status}`));
    })
    .then(html => this.parseHtml(html))
    .catch(error => {
      Promise.reject(new Error(`NetworkError: ${error.message}`));
    });
  }
}
