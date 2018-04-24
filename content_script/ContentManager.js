/**
 * @fileoverwrite The PanelComponent class definition
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */


"use strict"

/**
 * The ContentManager class
 *
 */
class ContentManager {
  constructor({tagName}) {
    const builder = new PanelBuilder();

    builder
      .setContainer('div')
      .setTag(tagName)
      .setSeparator(" ");

    this._panelContainer = builder.build();
  }

  reset() {
    this._panelContainer.remove();
  }

  run() {
    return this._panelContainer
      .render(document.querySelector('body'))
      .catch(error => {
        return Promise.reject(new Error(`NetworkError: ${error.message}`));
      });
  }
}
