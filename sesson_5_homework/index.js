import Register from "./SignUp/signUp.js";
import LoginUser from "./Login/login.js";
import CheckEmailScreen from "./CheckEmail/index.js";
import MainScreen from "./Main/index.js";
import InfoScreen from "./info/index.js";

class App {
  $activeScreen;
  constructor() {
    this.setUpAuthListener();
  }
  setUpAuthListener() {
    firebase.auth().onAuthStateChanged((user) => {
      let screen;
      let titleScreen;
      if (user && user.emailVerified) {
        screen = new InfoScreen();
        titleScreen = "Main Screen";
      } else if (user && !user.emailVerified) {
        screen = new CheckEmailScreen();
        titleScreen = "Check Email";
      } else {
        screen = new LoginUser();
        titleScreen = "Login";
      }
      this.changeActiveScreen(screen, titleScreen);
    });
  }
  changeActiveScreen(screen, title) {
    const appElement = document.getElementById("app");
    if (appElement) {
      if (this.$activeScreen) {
        appElement.innerHTML = "";
      }
      this.$activeScreen = screen;
      document.title = title; //thay doi title theo tung screen
      screen.Render(appElement);
    }
  }
}
const app = new App();
export default app;
