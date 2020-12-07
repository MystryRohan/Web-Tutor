const srch = document.querySelector(".search");
const images = document.querySelectorAll(".container img");
const acti = document.getElementsByClassName("filter");
const btn = document.querySelector(".find");
showAll();
btn.addEventListener("click", () => {
  for (let i = 0; i < images.length; i++) {
    removeAct();
    if (srch.value.toLowerCase() == "pubg") {
      acti[0].classList.add("filter-active");
      acti[4].classList.add("filter-active");
      console.log(i);
    } else if (srch.value.toLowerCase() == "coding" /*|| "programming"*/) {
      acti[1].classList.add("filter-active");
      acti[3].classList.add("filter-active");
      console.log(i);
    } else if (srch.value.toLowerCase() == "dragonball" /*|| "dragon ball"*/) {
      acti[2].classList.add("filter-active");
      acti[5].classList.add("filter-active");
      console.log(i);
    } else if (srch.value.toLowerCase() == "") {
      showAll();
    } else {
      alert("No Image Found!");
      showAll();
      break;
    }
  }
});
function removeAct() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("filter-active");
  }
}
function showAll() {
  for (let i = 0; i < acti.length; i++) {
    acti[i].classList.add("filter-active");
  }
}
