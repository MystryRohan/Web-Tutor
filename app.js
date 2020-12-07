const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".drop-links");
const links = document.querySelectorAll("a");
hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("drop-active");
  links.forEach((e) => {
    e.addEventListener("click", () => {
      menu.classList.remove("drop-active");
    });
  });
});
