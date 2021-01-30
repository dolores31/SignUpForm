"use strict";

/* https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript */

const form = document.getElementById("signup");

const firstName = document.getElementById("firstName");
const firstNameError = document.querySelector("#firstName + span.error");

const lastName = document.getElementById("lastName");
const lastNameError = document.querySelector("#lastName + span.error");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

function inputListener(input, inputError, inputShowError) {
  input.addEventListener("input", function () {
    if (input.validity.valid) {
      inputError.textContent = "";
      input.className = "valid";
      inputError.className = "error";
    } else {
      inputShowError();
    }
  });
}

inputListener(firstName, firstNameError, firstNameShowError);
inputListener(lastName, lastNameError, lastNameShowError);
inputListener(email, emailError, emailShowError);
inputListener(password, passwordError, passwordShowError);

function inputValidity(input, inputShowError, event) {
  if (!input.validity.valid) {
    inputShowError();
    event.preventDefault();
  }
}

form.addEventListener("submit", function (event) {
  inputValidity(firstName, firstNameShowError, event);
  inputValidity(lastName, lastNameShowError, event);
  inputValidity(email, emailShowError, event);
  inputValidity(password, passwordShowError, event);
});

function firstNameShowError() {
  if (firstName.validity.valueMissing) {
    firstNameError.textContent = "First Name cannot be empty";
  }
  // Setting error styles
  firstName.className = "error";
  firstNameError.className = "error active";
}

function lastNameShowError() {
  if (lastName.validity.valueMissing) {
    lastNameError.textContent = "Last Name cannot be empty";
  }

  // Setting error styles
  lastName.className = "error";
  lastNameError.className = "error active";
}

function emailShowError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "E-mail address cannot be empty";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Looks like this is not an email";
  }

  // Setting error styles
  email.className = "error";
  emailError.className = "error active";
}

function passwordShowError() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password cannot be empty";
  }

  // Setting error styles
  password.className = "error";
  passwordError.className = "error active";
}
