/**
 * @fileoverview The BackgroundState class is defined
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */


class BackgroundState {
  constructor({command = ""}) {
    this.command = command;
  }

  getOptions() {}

  sendMessage(tab) {
    const thisState = this.getCurrentState();
    const options = thisState.getOptions.bind(this)();

    this.refresh();

    return browser.tabs.sendMessage(tab.id, options);
  }

  next() {}

  /**
   * @param {string} wordToFetch
   * @return {Promise}
   */
  handleMessage({wordToFetch}) {}
}
