const joke = document.querySelector(".joke");
const search = document.querySelector(".search");
const btnRandomEl = document.querySelector(".btnRandom");
const btnSearchEl = document.querySelector(".btnSearch");
const inputSearchEl = document.querySelector(".inputSearch");
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
  if (inputSearchEl.value !== "") {
    fetch(`https://icanhazdadjoke.com/search?term=${inputSearchEl.value}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "github.com/raffbenato",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        joke.textContent = data.results[0].joke;

        joke.classList.remove("hidden");
      });
  }
});

const jimbo = document.querySelector(".jimbo");
jimbo.addEventListener("click", function () {
  joke.textContent = "Jimbo is a little girl";
  joke.classList.remove("hidden");
});
