"use strict";
import { login, getMe } from "./func/auth.js";

const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", login);
