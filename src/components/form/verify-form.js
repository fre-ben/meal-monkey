import { createElement } from "../../utils/createElement";

function createOTPInput() {
  // const input = document.createElement("input");
  // input.type = "password";
  // input.placeholder = "*";
  // input.className = "input input-sm";
  // input.maxLength = 1;
  const input = createElement("input", {
    type: "password",
    placeholder: "*",
    className: "input input-sm",
    maxLength: 1,
  });

  return input;
}

function createForm() {
  const form = createElement("form", {
    className: "ver-form",
  });

  return form;
}

function createInputs() {
  const inputOne = createOTPInput();
  const inputTwo = createOTPInput();
  const inputThree = createOTPInput();
  const inputFour = createOTPInput();

  const inputs = createElement("div", {
    className: "input-cols",
    children: [inputOne, inputTwo, inputThree, inputFour],
  });

  return inputs;
}

export function createVerifyForm() {
  const form = createForm();

  // const form = document.createElement("form");
  // form.className = "ver-form";

  // Title
  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  // Info Text
  const txtInfo = document.createElement("p");
  txtInfo.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  const inputs = createInputs();

  // inputs.append(inputOne, inputTwo, inputThree, inputFour);

  // Button
  const button = document.createElement("button");
  button.innerText = "Next";
  button.className = "btn";

  // Button function
  function submit() {
    alert("Valid!");
  }

  button.addEventListener("click", submit);

  // Text-Link
  const txtProblem = document.createElement("p");
  txtProblem.innerText = "Didn't Receive?";

  // Link
  const link = document.createElement("a");
  link.innerText = " Click here";
  link.href = "#";

  txtProblem.append(link);

  form.append(title, txtInfo, inputs, button, txtProblem);

  // Form Deployment
  return form;
}
