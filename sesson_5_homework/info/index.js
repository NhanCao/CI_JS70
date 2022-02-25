import InputControl from "../Common/inputControl.js";
import { getCurrentUser } from "../firebase/auth.js";
class InfoScreen {
  $container;
  $paper;

  $containerAvatar;
  $avatar;

  $form;
  $title;
  $email;
  $phone;
  $name;
  $avatarURL;

  $btnSubmit;

  constructor() {
    this.$container = document.createElement("div");
    this.$container.classList.add("info-screen");

    this.$paper = document.createElement("div");
    this.$paper.classList.add("paper");

    this.$containerAvatar = document.createElement("div");
    this.$containerAvatar.classList.add("avatar-container");

    this.$avatar = document.createElement("div");
    this.$avatar.classList.add("avatar");

    this.$form = document.createElement("form");
    this.$form.classList.add("formInfo");
    this.$form.addEventListener("submit", this.handleSubmit);

    this.$title = document.createElement("div");
    this.$title.classList.add("title");
    this.$title.innerHTML = "Your Profile";

    this.$email = new InputControl("Email", "text", "email");
    this.$phone = new InputControl("Your Phone", "text", "phone");
    this.$name = new InputControl("Your Name", "text", "name");
    this.$avatarURL = new InputControl("Avatar", "text", "avatar");

    this.$avatarURL.setEventListener("input", this.handleChangeAvatar);

    this.$btnSubmit = document.createElement("button");
    this.$btnSubmit.type = "submit";
    this.$btnSubmit.innerHTML = "Change your Info";

    const user = getCurrentUser();
    this.$email.setAttribute("value", user.email);
    this.$email.setAttribute("disabled", true);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { phone, name, avatar } = e.target;
    console.log([phone.value, name.value, avatar.value]);
  };

  handleChangeAvatar = (e) => {
    this.$avatar.style.backgroundImage = "url(${e.target.value})";
  };

  Render(eleApp) {
    eleApp.appendChild(this.$container);
    this.$container.appendChild(this.$paper);
    this.$paper.append(this.$form, this.$containerAvatar);
    this.$containerAvatar.append(this.$avatar);
    this.$form.append(
      this.$title,
      this.$email.Render(),
      this.$phone.Render(),
      this.$name.Render(),
      this.$avatarURL.Render(),
      this.$btnSubmit
    );
  }
}
export default InfoScreen;
