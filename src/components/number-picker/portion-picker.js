import { createElement } from "../../utils/createElement";

// - Button
const buttonMinus = createElement("button", {
  className: "btn",
  innerText: "-",
  onclick: function () {
    if (counter.value >= 1) {
      counter.value = +counter.value - 1;
    }
  },
});

// Counter
const counter = createElement("input", {
  className: "input",
  type: "number",
  value: "1",
});

// + Button
const buttonPlus = createElement("button", {
  className: "btn",
  innerText: "+",
  onclick: function () {
    counter.value = +counter.value + 1;
  },
});

export function createPortionPicker() {
  return createElement("div", {
    className: "portion-picker",
    children: [
      createElement("h3", {
        innerText: "Number of Portions",
      }),
      buttonMinus,
      counter,
      buttonPlus,
    ],
  });
}
