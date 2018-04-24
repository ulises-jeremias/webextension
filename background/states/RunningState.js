class RunningState extends BackgroundState {
  constructor() {
    super({command: "reset"});
  }

  next() {
    this.setCurrentState(this.getStates().stopped);
    return this;
  }

  handleMessage({wordToFetch}) {
    return this._wordFetcher.searchTitlesForWord(wordToFetch);
  }
}
