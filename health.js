let MenuBtn = document.querySelector("menu-btn");
let Navbar = document.querySelector(".navbar");

MenuBtn.Onclick = () => {
  Menu.classList.toggle(`fa-times`);
  Menu.classList.toggle(`active`);
};

window.onscroll = () => {
  Menu.classList.remove(`fa-times`);
  Menu.classList.remove(`active`);
};
