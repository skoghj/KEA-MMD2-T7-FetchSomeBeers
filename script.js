window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";

let beerTemplate;
let beerContainer;

function init() {
  console.log("init");

  beerTemplate = document.querySelector(".beer_template");
  console.log("beerTemplate", beerTemplate);
  beerContainer = document.querySelector(".beer_container");
  console.log("beer_container", beerContainer);

  fetch(beerURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showBeers(json); /*argument */
    });
}

function showBeers(beerJSON) /*prameter og det kunne være hvad som helst men så skal consol.log navn skal være samme*/ {
  console.log("Første json element", beerJSON[0]);
  let beerClone;
  beerJSON.forEach((beer) => {
    console.log("Beer", beer);
    beerClone = beerTemplate.cloneNode(true).content;
    beerClone.querySelector(".beer_image").src = beer.image_url;
    beerClone.querySelector(".beer_image").alt = `Picture of a ${beerJSON[0].name} beer`;
    beerClone.querySelector(".beer_name").textContent = beer.name;
    beerClone.querySelector(".beer_tagline").textContent = beer.tagline;
    beerClone.querySelector(".beer_description").textContent = beer.description;
    beerContainer.appendChild(beerClone);
  });
}

/*beerClone.querySelector(".beer_image").src = beerJSON[0].image_url;
beerClone.querySelector(".beer_image").alt = `Picture of a ${beerJSON[0].name} beer`;
beerClone.querySelector(".beer_name").textContent = beerJSON[0].name;
beerClone.querySelector(".beer_tagline").textContent = beerJSON[0].tagline;
beerClone.querySelector(".beer_description").textContent = beerJSON[0].description;
beerContainer.appendChild(beerClone);*/
