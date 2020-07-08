var button_write_us = document.querySelector(".button-adress");
var popup_write_us = document.querySelector(".write-us");
var popup_write_us_close = document.querySelector(".write-us .button-close");
var form_write_us = document.querySelector(".form-write-us");
var input_name = document.querySelector(".write-us .input[name=name]");
var input_email = document.querySelector(".write-us .input[name=email]");
var input_textarea = document.querySelector(".write-us .input[name=textarea]");

var isStorageSupport = true;
var storage_name = "";
var storage_email = "";

try {
  storage_name = localStorage.getItem("name");
  storage_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

button_write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_write_us.classList.remove("popup-off");
  popup_write_us.classList.add("popup-animation");
  if (storage_name) {
    input_name.value = storage_name;
    input_email.focus();
    if (storage_email) {
      input_email.value = storage_email;
      input_textarea.focus();
    }
  } else {
    input_name.focus();
  }
});

popup_write_us_close.addEventListener("click", function () {
  popup_write_us.classList.add("popup-off");
  popup_write_us.classList.remove("popup-error");
  popup_write_us.classList.remove("popup-animation");
});

form_write_us.addEventListener("submit", function (evt) {
  if (!input_name.value || !input_email.value || !input_textarea.value) {
    evt.preventDefault();
    popup_write_us.classList.remove("popup-error");
    popup_write_us.offsetWidth = input_name.offsetWidth;
    popup_write_us.classList.add("popup-error");
    if (!input_name.value) { input_name.classList.add("input-error"); }
    if (!input_email.value) { input_email.classList.add("input-error"); }
    if (!input_textarea.value) { input_textarea.classList.add("input-error"); }
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("name", input_name.value);
      localStorage.setItem("email", input_email.value);
    }
  }
});

input_name.addEventListener("click", function () {
  input_name.classList.remove("input-error");
});

input_email.addEventListener("click", function () {
  input_email.classList.remove("input-error");
});
input_textarea.addEventListener("click", function () {
  input_textarea.classList.remove("input-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup_write_us.classList.contains("popup-off")) {
      evt.preventDefault();
      popup_write_us.classList.add("popup-off");
      popup_write_us.classList.remove("popup-error");
      popup_write_us.classList.remove("popup-animation");
    }
  }
});

