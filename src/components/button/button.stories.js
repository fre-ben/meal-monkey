import "./button.css";
import buttonFilled from "./button-filled.html";
import buttonBorder from "./button-border.html";

export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const filled = () => buttonFilled;
export const border = () => buttonBorder;
