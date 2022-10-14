"use strict";

document.querySelector(".menu").addEventListener("click", openMenu);

function openMenu() {
  const menu = document.querySelector("#mobile");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    document.querySelector(".menu").textContent = "MENU";
  } else {
    menu.style.display = "flex";
    document.querySelector(".menu").textContent = "CLOSE";
  }
}
