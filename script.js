const sidebar = document.querySelector("aside");
const login = document.querySelector(".login");
const account = document.querySelector(".account");

function openNavbar() {
  sidebar.classList.add("translate-x-0");
  sidebar.classList.remove("translate-x-full");
}
function closeNavbar() {
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("translate-x-full");
}
function openLogin() {
  login.classList.add("translate-x-0");
  login.classList.remove("translate-x-full");
}

function closeLogin() {
  login.classList.remove("translate-x-0");
  login.classList.add("translate-x-full");
}
function openAccount() {
  account.classList.add("translate-x-0");
  account.classList.remove("-translate-x-full");
}

function closeAccount() {
  account.classList.remove("translate-x-0");
  account.classList.add("-translate-x-full");
}
