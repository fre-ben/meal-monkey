// {
//   /* <h2>We have sent an OTP to your Mobile</h2>
// <p>Please check your mobile number 071*****12 continue to reset your password</p>
// <div>
//     <input type="text" placeholder="*">
//     <input type="text" placeholder="*">
//     <input type="text" placeholder="*">
//     <input type="text" placeholder="*">
// </div>
// <button>Next</button>
// <p>Didn't Receive?</p><a href="#">Click here</a> */
// }

function createOTPInput() {
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "*";
  input.className = "input input-sm";
  input.maxLength = 1;

  return input;
}

export function createVerifyForm() {
  const form = document.createElement("form");
  form.className = "ver-form";

  // Title
  const title = document.createElement("h2");
  title.innerText = "We have sent an OTP to your Mobile";

  // Info Text
  const txtInfo = document.createElement("p");
  txtInfo.innerText =
    "Please check your mobile number 071*****12 continue to reset your password";

  // // Input fields (old)
  // const inputs = document.createElement("div");
  // inputs.innerHTML = `<input type="password" class="input input-sm" placeholder="*"><input type="password" class="input input-sm" placeholder="*"><input type="password" class="input input-sm" placeholder="*"><input type="password" class="input input-sm" placeholder="*">`;
  // inputs.className = "input-cols";

  // Input fields (new)
  const inputs = document.createElement("div");
  inputs.className = "input-cols";

  const inputOne = createOTPInput();
  const inputTwo = createOTPInput();
  const inputThree = createOTPInput();
  const inputFour = createOTPInput();

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

  inputs.append(inputOne, inputTwo, inputThree, inputFour);
  txtProblem.append(link);

  form.append(title, txtInfo, inputs, button, txtProblem);

  // Form Deployment
  return form;
}
