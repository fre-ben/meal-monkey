import "./form.css";
import { createRegisterForm } from "./register-form.js"

export default {
    title: "Components/Form",
    parameters: { layout: "centered" },
};

export const register = () => createRegisterForm();