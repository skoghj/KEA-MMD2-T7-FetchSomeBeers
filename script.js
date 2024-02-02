window.addEventListener("DOMContentLoaded", init);

const beerURL = "https://api.punkapi.com/v2/beers";
//const beerURL = "https://kea-alt-del.dk/t7/api/products";

function init() {
  console.log("init");

  fetch(beerURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showBeers(json);
    });
}

function showBeers(beerJSON) {
  console.log("Første json element", beerJSON[0]);
}
