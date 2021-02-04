import { createElement } from "../../utils/createElement";

function createInputElement() {
  return createElement("input", {
    className: "input input-sm",
    placeholder: "*",
    type: "number",
    maxLength: 1,
    min: 0,
    max: 9,
  });
}

export function createVerifyForm() {
  const inputOne = createInputElement();
  const inputTwo = createInputElement();
  const inputThree = createInputElement();
  const inputFour = createInputElement();

  return createElement("form", {
    className: "ver-form",
    children: [
      createElement("h2", {
        innerText: "We have sent an OTP to your Mobile",
      }),
      createElement("p", {
        innerText:
          "Please check your mobile number 071*****12 continue to reset your password",
      }),
      createElement("div", {
        className: "input-cols",
        children: [inputOne, inputTwo, inputThree, inputFour],
      }),
      createElement("input", {
        type: "submit",
        innerText: "Next",
        className: "btn",
      }),
      createElement("p", {
        innerText: "Didn't receive?",
        children: [
          createElement("a", {
            innerText: "Click here",
            href: "#",
          }),
        ],
      }),
    ],
    onsubmit: function (event) {
      event.preventDefault();

      const OTPInput = `${inputOne.value}${inputTwo.value}${inputThree.value}${inputFour.value}`;
      const secretPassword = "3333";
      if (OTPInput === secretPassword) {
        alert("Your OTP is: " + OTPInput + " - That is correct!");
      } else {
        alert("Your OTP is: " + OTPInput + " - That is WROOOOOONG!");
      }
    },
  });
}
