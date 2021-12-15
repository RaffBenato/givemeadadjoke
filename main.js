const joke = document.querySelector(".joke");
const search = document.querySelector(".search");
const btnRandomEl = document.querySelector(".btnRandom");
const btnSearchEl = document.querySelector(".btnSearch");
const btnGoEl = document.querySelector(".btnGo");

btnRandomEl.addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "github.com/raffbenato",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      joke.textContent = data.joke;

      search.classList.add("hidden");
      joke.classList.remove("hidden");
    });
});

btnSearchEl.addEventListener("click", function () {
  search.classList.remove("hidden");
  joke.classList.add("hidden");
});

btnGoEl.addEventListener("click", function () {
  joke.classList.remove("hidden");
});
