let optional = document.querySelectorAll(
  ".form-container input:not(:required)"
);
optional.forEach((element) => {
  element.addEventListener("click", changeBorder);
  element.addEventListener("keydown", changeBorder);
});

let password = document.querySelector(".form-container #password");
let confirm = document.querySelector(".form-container #confirm-password");
password.addEventListener("change", passwordMatches);
confirm.addEventListener("change", passwordMatches);

function passwordMatches() {
  let isMatch = checkMatch(password.value, confirm.value);
  if (isMatch) {
    addClass(password, "passed");
    addClass(confirm, "passed");
    removeClass(password, "not-passed");
    removeClass(confirm, "not-passed");
  } else {
    addClass(password, "not-passed");
    addClass(confirm, "not-passed");
    removeClass(password, "passed");
    removeClass(confirm, "passed");
  }
}
function checkMatch(str1, str2) {
  return str1 === str2;
}

function removeClass(element, className) {
  element.classList.remove(className);
}
function addClass(element, className) {
  element.classList.add(className);
}
function changeBorder(e) {
  let el = e.target;
  if (el.classList.contains("passed")) {
    removeClass(el, "passed");
  } else if (el.classList.contains("not-passed")) {
    removeClass(el, "not-passed");
  }
  if (el.value != "" && el.checkValidity()) {
    addClass(el, "passed");
  } else if (el.value != "" && !el.checkValidity()) {
    addClass(el, "not-passed");
  }
}
