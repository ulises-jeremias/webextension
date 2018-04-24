/**
 * @fileoverview The StoppedState class is defined
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */

class StoppedState extends BackgroundState {
  constructor() {
    super({command: "run"});
  }

  next() {
    this.setCurrentState(this.getStates().running);
    return this;
  }

  /**
   * @param {string} wordToFetch
   * @return {Promise}
   */
  handleMessage({wordToFetch}) {
    return Promise.resolve([]);
  }
}
