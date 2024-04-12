"use strict";

import { showSwal, saveToLocalStorage, getToken } from "./utilites.js";

const register = () => {
  const nameInput = document.querySelector("#name");
  const phoneInput = document.querySelector("#phone");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const newUserInfo = {
    name: nameInput.value.trim(),
    username: emailInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    password: passwordInput.value.trim(),
    ConfirmPassword: passwordInput.value.trim(),
  };

  fetch(`http://localhost:4000/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserInfo),
  })
    .then((res) => {
      if (res.status == 201) {
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: "Your account created successfuly",
          footer: '<a href="#">Go to my panel</a>',
        }).then(() => {
          location.href = "index.html";
        });
      } else if (res.status == 409) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Change email please",
        });
      }
      return res.json();
    })
    .then((result) => {
      saveToLocalStorage("user", { token: result.accessToken });
    });
};

const login = () => {
  const usernameLogin = document.querySelector("#identifier");
  const userPassLogin = document.querySelector("#password");

  const userInfo = {
    identifier: usernameLogin.value.trim(),
    password: userPassLogin.value.trim(),
  };

  fetch(`http://localhost:4000/v1/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userInfo),
  })
    .then((res) => {
      if (res.status == 200) {
        showSwal(
          "Done",
          "success",
          "logged in successfuly",
          "<a href='user-panel.html'>go to panel</a>",
          () => {
            location.href = "index.html";
          }
        );
      } else if (res.status == 401) {
        showSwal("Login Failed", "error", "You are not registered with us");
      }
      return res.json();
    })
    .then((result) => {
      saveToLocalStorage("user", { token: result.accessToken });
    });
};

const getMe = async () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  const res = await fetch(`http://localhost:4000/v1/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export { register, login, getMe };
