const backgroundManager = new BackgroundManager({
  base: "https://scholar.google.com",
  path: "/scholar",
  paramName: "q",
  tagName: "h1",
  initialState: "stopped"
});

browser.browserAction.onClicked.addListener(backgroundManager.getClickedEventHandler());

browser.runtime.onMessage.addListener(backgroundManager.getMessageHandler());
