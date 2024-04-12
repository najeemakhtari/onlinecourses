"use strict";

//course description read more button
const readMoreBtn = document.querySelector(".course-description__btn");
let readMoreFlag = true;
readMoreBtn.addEventListener("click", () => {
  document
    .querySelector(".course-description__wrapper")
    .classList.toggle("active");
  document
    .querySelector(".course-description__fade")
    .classList.toggle("deactive");

  if (readMoreFlag) {
    readMoreFlag = false;
    readMoreBtn.innerText = "Show less";
  } else {
    readMoreBtn.innerText = "Read more";
    readMoreFlag = true;
  }
});

//course concepts rows
const courseConcepts = document.querySelectorAll(".concept-row");

courseConcepts.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});
