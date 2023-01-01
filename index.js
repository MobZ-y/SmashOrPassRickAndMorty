const countriesContainer = document.querySelector(".countries-container");
const btn = document.querySelector("button");

let datastore = [];
let pages = 1;

async function FetchRickAndMorty() {
  await fetch(`https://rickandmortyapi.com/api/character/?page=` + pages)
    .then((res) => res.json())
    .then((data) => {
      datastore = data.results;

      console.log(datastore);
      Display();
    });
}

function Display() {
  countriesContainer.innerHTML = datastore
    .map(
      (info) => `
  <div class="card">
  <img src=${info.image} alt="drapeau " >
            <h2>${info.name}</h2>
            <h4>${info.species}</h4>
            </div>

  `
    )
    .join("");
}

window.addEventListener("load", FetchRickAndMorty());

btn.addEventListener("click", () => {
  pages++;
  FetchRickAndMorty();
});
