import { createElement } from "../../utils/createElement";

// function createOTPInput() {
//   const input = createElement("input", {
//     type: "password",
//     placeholder: "*",
//     className: "input input-sm",
//     maxLength: 1,
//   });

//   return input;
// }

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
// function createForm() {
//   const form = createElement("form", {
//     className: "ver-form",
//     onsubmit: function (event) {
//       event.preventDefault();

//       const secretPassword = "3333";
//       const OTPInput = `${inputOne.value}${inputTwo.value}${inputThree.value}${inputFour.value}`;

//       if (OTPInput === secretPassword) {
//         alert("Your OTP is: " + OTPInput + " - That is correct!");
//       } else {
//         alert("Your OTP is: " + OTPInput + " - That is WROOOOOONG!");
//       }
//     } } )
//   return form;
// }

// // Build Website function
// export function createVerifyForm() {
//   const form = createForm();

//   // Title
//   const title = document.createElement("h2");
//   title.innerText = "We have sent an OTP to your Mobile";

//   // Info Text
//   const txtInfo = document.createElement("p");
//   txtInfo.innerText =
//     "Please check your mobile number 071*****12 continue to reset your password";

//   const inputs = createElement("div", {
//     className: "input-cols",
//     children: [inputOne, inputTwo, inputThree, inputFour],
//   });

//   // Button
//   const button = document.createElement("button");
//   button.innerText = "Next";
//   button.className = "btn";

//   // Text-Link
//   const txtProblem = document.createElement("p");
//   txtProblem.innerText = "Didn't Receive?";

//   // Link
//   const link = document.createElement("a");
//   link.innerText = " Click here";
//   link.href = "#";

//   txtProblem.append(link);

//   form.append(title, txtInfo, inputs, button, txtProblem);

//   // Form Deployment
//   return form;
// }
