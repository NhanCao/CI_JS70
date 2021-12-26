import { InputValue } from "./classInput.js";
class SignIn {
  $container;
  $title;

  $formRegister;
  $userName;
  $password;

  $btnSubmit;
  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("center", "h-screen", "flex-col");

    this.$title = document.createElement("h3");
    this.$title.innerHTML = "Sign In";

    this.$formRegister = document.createElement("form");
    this.$formRegister.addEventListener("submit", this.Submit);

    this.$userName = new InputValue("text", "User Name", "userName");
    this.$password = new InputValue("password", "Password", "password");
    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Login";
  }
  Render() {
    this.$formRegister.append(
      this.$userName.Render(),
      this.$password.Render(),
      this.$btnSubmit
    );
    this.$container.append(this.$title, this.$formRegister);
    return this.$container;
  }
}
export { SignIn };
