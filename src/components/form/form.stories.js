import "./form.css";
import { createRegisterForm } from "./register-form.js";
import { createVerifyForm } from "./verify-form.js";

export default {
  title: "Components/Form",
  parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();
export const verify = () => createVerifyForm();
