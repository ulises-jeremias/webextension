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
  constructor() {
    this.builder = new PanelBuilder();

    this.builder
      .setContainer('div')
      .setSeparator(" ");
  }

  getPanelContainer(tagName = 'h1') {
    this._panelContainer || this.buildPanel(tagName);

    return this._panelContainer;
  }

  reset() {
    this.getPanelContainer().remove();
  }

  run() {
    return this.getPanelContainer()
      .render(document.querySelector('body'))
      .catch(error => {
        return Promise.reject(new Error(`NetworkError: ${error.message}`));
      });
  }

  buildPanel(tagName) {
    tagName && this.builder.setTag(tagName);

    this._panelContainer = this.builder.build();

    return this;
  }
}
