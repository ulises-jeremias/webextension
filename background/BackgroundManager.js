"use strict"

class BackgroundManager {
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
