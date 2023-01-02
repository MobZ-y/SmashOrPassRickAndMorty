const countriesContainer = document.querySelector(".countries-container");
const btnpass = document.getElementById("pass");
const btnsmash = document.getElementById("smash");

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

btnpass.addEventListener("click", () => {
  pages = Math.ceil(Math.random() * 182);
  console.log(pages);
  FetchRickAndMorty();
});

btnsmash.addEventListener("click", () => {
  pages = Math.ceil(Math.random() * 182);
  console.log(pages);
  FetchRickAndMorty();
});

btnsmash.addEventListener("mouseover", (e) => {
  const img = document.querySelector("img");

  if (true) {
    img.classList.toggle("i");
  }
});

btnpass.addEventListener("mouseover", (e) => {
  const img = document.querySelector("img");

  if (true) {
    img.classList.toggle("ineg");
  } else {
    img.classList.remove("i");
  }
});
