import { SignIn } from "./signIn.js";
const app = document.getElementById("signIn");
const login = new SignIn();
app.appendChild(login.Render());
