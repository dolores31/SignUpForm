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

firstName.addEventListener("input", function () {
  if (firstName.validity.valid) {
    firstNameError.textContent = "";
    firstName.className = "valid";
    firstNameError.className = "error";
  } else {
    firstNameShowError();
  }
});

lastName.addEventListener("input", function () {
  if (lastName.validity.valid) {
    lastNameError.textContent = "";
    lastName.className = "valid";
    lastNameError.className = "error";
  } else {
    lastNameShowError();
  }
});

email.addEventListener("input", function () {
  if (email.validity.valid) {
    emailError.textContent = "";
    email.className = "valid";
    emailError.className = "error";
  } else {
    emailShowError();
  }
});

password.addEventListener("input", function () {
  if (password.validity.valid) {
    passwordError.textContent = "";
    password.className = "valid";
    passwordError.className = "error";
  } else {
    passwordShowError();
  }
});

form.addEventListener("submit", function (event) {
  if (!firstName.validity.valid) {
    firstNameShowError();
    event.preventDefault();
  }
  if (!lastName.validity.valid) {
    lastNameShowError();
    event.preventDefault();
  }
  if (!email.validity.valid) {
    emailShowError();
    event.preventDefault();
  }
  if (!password.validity.valid) {
    passwordShowError();
    event.preventDefault();
  }
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
