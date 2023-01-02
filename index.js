const countriesContainer = document.querySelector(".countries-container");
const btn = document.querySelector("button");

let datastore = [];
let pages = 1;

async function FetchRickAndMorty() {
  await fetch(`https://rickandmortyapi.com/api/character/` + pages)
    .then((res) => res.json())
    .then((data) => {
      datastore = data;

      console.log(datastore);
      Display();
    });
}

function Display() {
  countriesContainer.innerHTML = datastore = `
  <div class="card">
  <img src=${datastore.image} alt="drapeau " >
            <h2>${datastore.name}</h2>
            <h4>${datastore.species}</h4>
            </div>

  `;
}

window.addEventListener("load", FetchRickAndMorty());

btn.addEventListener("click", () => {
  pages = Math.floor(Math.random() * 183);
  console.log(pages);
  FetchRickAndMorty();
});
