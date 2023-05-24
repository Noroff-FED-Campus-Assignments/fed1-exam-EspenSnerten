const form = document.getElementById("form");
const name = document.getElementById("fname");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const text = document.getElementById("textbox");
const successModal = document.getElementById("success-modal");
const closeBtn = document.getElementById("closeBtn");

const API_KEY = "keyEqTijnaavQtYbr"; // this is not best practice and is just here for convenience sake for this project
const BASE_ID = "appcDjjskefLIyJVY";
const TABLE_NAME = "tblYJ7xIdH4iURIep";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
  if (isFormValid()) {
    setTimeout(() => {
      successModal.classList.add("modal-content");
      postToAirtable();
    }, 1000);
  }
});

function postToAirtable() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const textValue = text.value.trim();

  const data = {
    fields: {
      name: nameValue,
      email: emailValue,
      subject: subjectValue,
      message: textValue,
    },
  };

  fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data sent to Airtable:", data);
    })
    .catch((error) => {
      console.error("Error sending data to Airtable:", error);
    });
}

function isFormValid() {
  const inputContainers = form.querySelectorAll(".form_box");
  let result = true;
  inputContainers.forEach((container) => {
    if (container.classList.contains("error")) {
      result = false;
    }
  });
  return result;
}

function validateForm() {
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const textValue = text.value.trim();

  if (nameValue === "") {
    setErrorFor(name, "Please enter your name");
  } else {
    setSuccessfor(name);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email is required");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Must be a valid email address");
  } else {
    setSuccessfor(email);
  }

  if (subjectValue === "") {
    setErrorFor(subject, "Please state the subject of your message");
  } else {
    setSuccessfor(subject);
  }

  if (textValue.length <= 10) {
    setErrorFor(text, "Minimum required characters is 10");
  } else {
    setSuccessfor(text);
  }
}

function setErrorFor(input, message) {
  const formBox = input.parentElement;
  const small = formBox.querySelector("small");

  small.innerText = message;
  formBox.className = "form_box error";
}

function setSuccessfor(input) {
  const formBox = input.parentElement;
  formBox.className = "form_box success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

closeBtn.addEventListener("click", () => {
  successModal.classList.remove("modal-content");
  subject.classList.remove("error");
  text.classList.remove("error");

  text.value = "";
  subject.value = "";
});
