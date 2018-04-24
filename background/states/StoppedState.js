class StoppedState extends BackgroundState {
  constructor() {
    super({command: "run"});
  }

  next() {
    this.setCurrentState(this.getStates().running);
    return this;
  }

  handleMessage({wordToFetch}) {
    return Promise.resolve([]);
  }
}
