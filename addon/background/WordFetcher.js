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
  constructor({base = "", path = "/", paramName = "param"}) {
    this.base = base;
    this.path = path;
    this.paramName = paramName;
  }

  /**
   * Parse html from string
   *
   * @param {string} html
   * @return {HTMLDocument}
   */
  parseHtml(html) {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html");
  }

  /**
   * This method returns the result of searching for a word on a given page
   *
   * @param {string} word
   * @return {Promise}, returns the parsed html resolved as a Promise
   */
  searchWord(word) {
    return fetch(`${this.base}${this.path}?${this.paramName}=${word}`)
    .then(response => {
      if (response.ok) {
        return response.text();
      }

      return Promise.reject(new Error(`HTTP error: ${response.status}`));
    })
    .then(html => this.parseHtml(html))
    .catch(error => {
      return Promise.reject(new Error(`NetworkError: ${error.message}`));
    });
  }


  /**
   * This method returns the titles related to a given word
   *
   * @param {string} wordToFetch
   * @return {Promise}, returns the title elements resolved as a Promise
   */
  searchTitlesForWord(wordToFetch) {
    return this.searchWord(wordToFetch)
      .then(htmlDOM => {
        return htmlDOM.getElementsByClassName("gs_rt");
      })
      .then(elements => Array.from(elements).map(elem => elem.lastChild))
      .then(elements => elements.map(elem => {
        return {
          title: elem.textContent,
          href: elem.href
        };
      }))
      .catch(error => {
        Promise.reject(new Error(`NetworkError: ${error.message}`));
      });
  }
}
