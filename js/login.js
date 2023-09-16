document.querySelector(".log_in form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(check_input(user_name), check_input(user_pass));
    if (!check_input(user_name) || !check_input(user_pass)) {
    }
    console.log(user_name.value);
    if (
      JSON.parse(localStorage.getItem(`user.${user_name.value}`) !== null) &&
      user_name.value.length != 0
    ) {
      console.log(";;;;;;;;;;");
      console.log(
        JSON.parse(localStorage.getItem(`user.${user_name.value}`)).pass
      );
      if (
        JSON.parse(localStorage.getItem(`user.${user_name.value}`)).pass ===
        user_pass.value
      ) {
        window.location.href = "./allproducts.html";
      } else {
        user_pass.nextElementSibling.textContent = "Wrong passward";
      }
    } else if (
      JSON.parse(localStorage.getItem(`user.${user_name.value}`) == null) &&
      user_name.value.length != 0
    ) {
      window.location.href = "./index.html";
    }
  });