"use strict";

const showSwal = (title, icon, text, footer, callback) => {
  swal
    .fire({
      title,
      icon,
      text,
      footer,
    })
    .then((result) => callback(result));
};

const saveToLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.stringify(localStorage.getItem(key));
};

const getToken = () => {
  const userInfos = JSON.parse(localStorage.getItem("user"));
  return userInfos ? userInfos.token : null;
};

export { showSwal, saveToLocalStorage, getFromLocalStorage, getToken };
