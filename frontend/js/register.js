"use strict";

import { register } from "./func/auth.js";

const regBtn = document.querySelector("#reg-btn");

regBtn.addEventListener("click", register);
