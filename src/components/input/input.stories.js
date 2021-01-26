import "./input.css";
import inputMail from "./input-mail.html";
import inputPass from "./input-password.html";


export default {
  title: "Components/Input",
  parameters: { layout: "centered" },
};

export const mail = () => inputMail;
export const pass = () => inputPass;
