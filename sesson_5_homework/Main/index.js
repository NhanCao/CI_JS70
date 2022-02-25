class MainScreen {
  $container;
  constructor() {
    this.$container = document.createElement("h1");
    this.$container.innerText = "MAIN SCREEN";
  }
  Render() {
    return this.$container;
  }
}
export default MainScreen;
