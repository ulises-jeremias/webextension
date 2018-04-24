/**
 * @fileoverview The BackgroundManager class is defined
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */

"use strict"

/**
 * This is the main class of the extension. In it, the behavior is defined
 * for each state of the extension.
 *
 */
class BackgroundManager {

  /**
   * @constructor
   *
   * @param {string} base, url base
   * @param {string} path
   * @param {string} paramName
   * @param {string} tagName
   *
   * @return {BackgroundManager}
   */
  constructor({base, path, paramName, tagName}) {
    this._wordFetcher = new WordFetcher({base, path, paramName});
    this._currentState = null;

    this._config = {
      base,
      path,
      paramName,
      tagName
    };

    this._states = {
      running: new RunningState(),
      stopped: new StoppedState()
    };
  }

  getConfig() {
    return {...this._config};
  }

  /**
   * Change the status of the application verifying that it is valid
   *
   * @param {BackgroundState}
   */
  setCurrentState(newState) {
    this._currentState = Object.values(this._states).find(state => state === newState);
  }

  getCurrentState() {
    return this._currentState;
  }

  getStates() {
    return {...this._states};
  }

  sendMessage(tab) {
    return this._currentState.sendMessage.bind(this)(tab);
  }

  handleMessage({wordToFetch}) {
    return this._currentState.handleMessage.bind(this)({wordToFetch});
  }

  refresh() {
    return this._currentState.next.bind(this)();
  }
}
