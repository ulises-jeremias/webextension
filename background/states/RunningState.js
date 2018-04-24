/**
 * @fileoverview The RunningState class is defined
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */

class RunningState extends BackgroundState {
  constructor() {
    super({command: "reset"});
  }

  next() {
    this.setCurrentState(this.getStates().stopped);
    return this;
  }

  /**
   * @param {string} wordToFetch
   * @return {Promise}
   */
  handleMessage({wordToFetch}) {
    return this._wordFetcher.searchTitlesForWord(wordToFetch);
  }
}
