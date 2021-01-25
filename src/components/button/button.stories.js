import "./button.css";
import buttonFilled from "./button-filled.html";
import buttonBorder from "./button-border.html";
import buttonFB from "./button-facebook.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const filled = () => buttonFilled;
export const border = () => buttonBorder;
export const facebook = () => buttonFB;
