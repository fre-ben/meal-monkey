// export function createRegisterForm() {
//     return `
//      <form class="form"
//          <h2>Reset Password</h2>
//          <p>Please enter your email to receive a link to create a new password via email</p>
//          <input placeholder="email" />
//          <button>Submit</button>
//       </form>
//     `;
// }

export function createRegisterForm() {
  const form = document.createElement("form");
  form.className = "form";

  const paragraph = document.createElement("p");
  paragraph.innerText =
    "Please enter your email to receive a link to create a new password via email";

  const title = document.createElement("h2");
  title.innerText = "Reset Password";

  const input = document.createElement("input");
  input.type = "email";
  input.placeholder = "E-mail";
  input.className = "input";

  const button = document.createElement("button");
  button.innerText = "Submit";

  function register() {
    alert("Submitted!");
  }

  button.addEventListener("click", register);
  button.className = "btn";

  form.append(title, paragraph, input, button);

  return form;
}
