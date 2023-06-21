"use strict";

const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  var className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }
  console.log(document.body);
console.log(this.textContent);
});

switcher.addEventListener();
