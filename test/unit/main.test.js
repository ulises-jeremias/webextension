"use strict";

describe("Background", function() {
  describe("browserAction", function() {
    it("should register a listener for onClicked", function() {
      console.log(browser.browserAction.onClicked.addListener);
      sinon.assert.calledOnce(browser.browserAction.onClicked.addListener);
    });

    it("should open a tab when the button is clicked", function() {
      browser.browserAction.onClicked.trigger();
    });
  });
});
