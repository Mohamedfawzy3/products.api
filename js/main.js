let user_name = document.getElementById("user_name");
let user_pass = document.getElementById("passward");
let user_email = document.getElementById("user_email");
let inputs = document.querySelectorAll(".inputs input");
let login_but = document.querySelector(".log_in button.btn");
let signup_but = document.querySelector(".sign_up button.btn");
let re_user = 0;
let re_pass = 0;
// inputs check function
let valid = false;
function check_input(input) {
  if (input.value.length == 0) {
    input.nextElementSibling.textContent = `${input.getAttribute("msg")}`;
    valid = false;
  } else if (
    input === user_pass &&
    input.value.length < 8 &&
    input.value.length !== 0
  ) {
    input.nextElementSibling.textContent = "passward mus be more than 8 ch.";
    valid = false;
  }
  //  else if(user_email!=null){
  //     if (!user_email.value.match(valid_emailExpressin)) {
  //     user_email.nextElementSibling.textContent = "oops,invalid email.";
  //     valid = false;
  //     }
  //   }
  else {
    console.log("in valid");
    valid = true;
  }
  console.log("inputs:", valid);
  return valid;
}
// check inputs on blur
let valid_emailExpressin = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
inputs.forEach((input) => {
  input.addEventListener("blur", () => {
    if (input.value.length == 0) {
      input.nextElementSibling.textContent = `${input.getAttribute("msg")}`;
    } else if (
      input === user_pass &&
      input.value.length < 8 &&
      input.value.length !== 0
    ) {
      input.nextElementSibling.textContent = "passward mus be more than 8 ch.";
    } else if (user_email != null) {
      if (
        !user_email.value.match(valid_emailExpressin) &&
        input.value.length > 0
      ) {
        user_email.nextElementSibling.textContent = "oops,invalid email.";
      }
    }
  });
});
// remove error msg when focus input
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.nextElementSibling.textContent = "";
  });
});

let user;
let i;
let last_value = localStorage.getItem("last_value") || 0;

//  ---------- sign up cheack---------
document.querySelector(".sign_up form").addEventListener("submit", (e) => {
  console.log(
    check_input(user_name),
    check_input(user_email),
    check_input(user_pass)
  );
  console.log(JSON.parse(localStorage.getItem(`user.${user_name.value}`)));
  if (
    check_input(user_name) === false ||
    check_input(user_email) === false ||
    check_input(user_pass) === false
  ) {
    e.preventDefault();
    console.log("lllllllllllll");
  } else if (
    check_input(user_name) &&
    check_input(user_email) &&
    check_input(user_pass) &&
    JSON.parse(localStorage.getItem(`user.${user_name.value}`) == null)
  ) {
    console.log(true);
    localStorage.setItem("last_value", last_value);
    i = localStorage.getItem("last_value");
    user = {
      name: user_name.value,
      email: user_email.value,
      pass: user_pass.value,
    };
    console.log(user);
    localStorage.setItem(`user.${user_name.value}`, JSON.stringify(user));
    i++;
    last_value = i;
    window.open("../allproducts.html", "", "");
  } else {
    e.preventDefault();
    console.log("dibliing", signup_but, user_name.nextElementSibling);
    user_name.nextElementSibling.textContent = `This user is aready sign up try to login.`;
  }
});


