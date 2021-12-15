const joke = document.querySelector(".joke");
const search = document.querySelector(".search");
const btnRandomEl = document.querySelector(".btnRandom");
const btnSearchEl = document.querySelector(".btnSearch");
const btnGoEl = document.querySelector(".btnGo");

btnRandomEl.addEventListener("click", function () {
  joke.classList.remove("hidden");
  search.classList.add("hidden");
});

btnSearchEl.addEventListener("click", function () {
  search.classList.remove("hidden");
  joke.classList.add("hidden");
});

btnGoEl.addEventListener("click", function () {
  joke.classList.remove("hidden");
});
