// Store the references to all the forms in the document
const forms = document.getElementsByTagName("form");

// Reference the first (and currently only) form
const addUserForm = forms[0];

// Add and event listener to the form to displays to the console when the submit
// button is clicked
addUserForm.addEventListener("submit", event => {
  event.preventDefault();
  console.log(event);
});

// Add a second event listener to get the email and password of the form inputs
// THIS IS A BAD PRACTICE, USE ONLY ONE Event Listener by type
addUserForm.addEventListener("submit", e => {
  e.preventDefault();
  const emailRef = addUserForm.elements["email"];
  const passwordRef = addUserForm.elements["password"];

  const email = emailRef.value;
  const password = passwordRef.value;

  // Make some validations to actually send the data to the server
  addUserForm.classList.add("was-validated");

  if (email === "") {
    console.error("email cant't be empty");
    return
  }

  if (password === "") {
    console.error("password cant't be empty");
    return
  }

  // Form is valid, we can do wherever the form is meant to do
  console.log(email, password);
  alert(`${email}:${password}`);
});