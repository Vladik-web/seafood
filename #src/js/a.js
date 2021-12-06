const headerBtn = document.querySelector(".btn-menu");
const nav = document.querySelector(".nav");
const navClose = document.querySelector(".nav__close");

headerBtn.addEventListener("click", () => {
  open(nav);
});
navClose.addEventListener("click", () => {
  open(nav);
});
function open(item) {
  item.classList.toggle("active");
  document.body.classList.toggle("active");
}
