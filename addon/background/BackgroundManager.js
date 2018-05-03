"use strict"

/**
 * @fileoverview The BackgroundManager class is defined
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */
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
   * @param {BackgroundState} initialState
   *
   * @return {BackgroundManager}
   */
  constructor({base, path, paramName, tagName, initialState}) {
    this._wordFetcher = new WordFetcher({base, path, paramName});

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

    this.setCurrentState(this._states[initialState] || this._states.stopped);
  }

  getConfig() {
    return {
      ...this._config
    };
  }

  /**
   * Change the status of the application verifying that it is valid
   *
   * @param {BackgroundState}
   */
  setCurrentState(newState) {
    const newCurrentState = Object.values(this._states).find(state => {
      return state === newState;
    });

    this._currentState = newCurrentState || this._states.stopped;
  }

  getCurrentState() {
    return this._currentState;
  }

  getStates() {
    return {
      ...this._states
    };
  }

  getClickedEventHandler() {
    const self = this;

    return async tab => {
      return await self._currentState.sendMessage.bind(self)(tab)
        .catch(error => {
          Promise.reject(new Error(`NetworkError: ${error.message}`));
        });
    };
  }

  getMessageHandler() {
    const self = this;

    return async message => {
      return await self._currentState.handleMessage.bind(self)(message)
        .catch(error => {
          Promise.reject(new Error(`NetworkError: ${error.message}`));
        });
    };
  }

  refresh() {
    return this._currentState.next.bind(this)();
  }
}
