/**
 * @fileoverview The BackgroundState class is defined
 * @author Ulises Jeremias Cornejo Fandos <ulisescf.24@gmail.com>
 *
 */

/**
 * 
 *
 */
class BackgroundState {
  constructor({command = ""}) {
    this.command = command;
  }

  sendMessage(tab) {
    const command = this._currentState.command;

    return browser.tabs.sendMessage(tab.id, {
      command: command,
      tagName: this.refresh().getConfig().tagName
    });
  }

  next() {}

  handleMessage({wordToFetch}) {}
}
