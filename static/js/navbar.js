const $menu = document.querySelector(".burger-menu");
const $navbar = document.querySelector(".navbar");

$menu.addEventListener("click", showNav);

function showNav(e) {
  e.stopPropagation();
  $navbar.classList.toggle("visible");
  $menu.classList.toggle("close");
}
