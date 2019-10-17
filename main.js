// Reference the first (and currently only) form
const [addUserForm] = document.getElementsByTagName("form");

// Reference to the inputs
const {
  email: emailRef,
  "email-verification": emailVerificationRef,
  password: passwordRef
} = addUserForm.elements;

// Event listeners
addUserForm.addEventListener("submit", e => {
  e.preventDefault();

  if (!emailRef.classList.contains("is-valid")) {
    return
  }

  if (!emailVerificationRef.classList.contains("is-valid")) {
    return
  }

  if (!passwordRef.classList.contains("is-valid")) {
    return
  }

  // Form is valid, we can do wherever the form is meant to do
  console.log(email.value, password.value);
  alert(`${email.value}:${password.value}`);
});

emailRef.addEventListener("focusout", e => {
  const email = emailRef.value;

  if (email === "") {
    feedback(emailRef, {message: "email can't be empty", valid: false});
    return
  }

  if (!validEmail(email)) {
    feedback(emailRef, {message: "email looks invalid", valid: false});
    return
  }

  feedback(emailRef, {valid: true});
});

emailVerificationRef.addEventListener("focusout", e => {
  const email = emailRef.value;
  const emailVerification = emailVerificationRef.value;

  if (emailVerification === "") {
    feedback(emailVerificationRef, {message: "email can't be empty", valid: false});
    return
  }

  if (!validEmail(emailVerification)) {
    feedback(emailVerificationRef, {message: "email looks invalid", valid: false});
    return
  }

  if (email !== emailVerification) {
    feedback(emailVerificationRef, {message: "email is not the same", valid: false});
    return
  }

  feedback(emailVerificationRef, {valid: true});
});

passwordRef.addEventListener("focusout", e => {
  const password = passwordRef.value;

  if (password.length < 5) {
    feedback(passwordRef, {message: "password must be at least 5 characters", valid: false});
    return
  }

  feedback(passwordRef, {valid: true});
});

// addMessage: accepts the classname and message to display the message
const addMessage = (classname, message) => `<div class="${classname}">${message}</div>`;

// validEmail: validates the email in a very basic form
const validEmail = email => /\S+@\S+\.\S+/.test(email);

// feedback: adds a message to the input to provide feedback to the user
const feedback = (element, {message, valid}) => {
  element.classList.remove("is-valid", "is-invalid");
  const sibling = element.nextElementSibling;
  if (sibling) {
    element.parentNode.removeChild(sibling);
  }

  const inputClassName = valid ? "is-valid" : "is-invalid";
  const messageClassName = valid ? "valid-feedback" : "invalid-feedback";

  element.classList.add(inputClassName);
  message
    ? element.insertAdjacentHTML("afterend", addMessage(messageClassName, message))
    : null;
};
