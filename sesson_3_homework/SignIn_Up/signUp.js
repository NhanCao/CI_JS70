import { InputValue } from "./classInput.js";
class Register {
  $container;
  $title;

  $formRegister;
  $userName;
  $email;
  $password;
  $confimPassword;

  $btnSubmit;
  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("center", "h-screen", "flex-col");

    this.$title = document.createElement("h3");
    this.$title.innerHTML = "Sign Up";

    this.$formRegister = document.createElement("form");
    this.$formRegister.addEventListener("submit", this.Submit);

    this.$userName = new InputValue("text", "User Name", "userName");
    this.$email = new InputValue("email", "Email", "emailUser");
    this.$password = new InputValue("password", "Password", "password");
    this.$confimPassword = new InputValue(
      "password",
      "Confim Password",
      "confimPass"
    );
    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Register";
  }
  Render() {
    this.$formRegister.append(
      this.$email.Render(),
      this.$userName.Render(),
      this.$password.Render(),
      this.$confimPassword.Render(),
      this.$btnSubmit
    );
    this.$container.append(this.$title, this.$formRegister);
    return this.$container;
  }
}
export { Register };
