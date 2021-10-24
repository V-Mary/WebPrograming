import {
    getInputValues,
    clearInputs
  } from "./dom.js";

import {
    postChainsaw,
    getAllChainsaws
} from "./api.js";

const submitButton = document.getElementById("submit_button");
const searchButton = document.getElementById("search_button");

let chainsaws = [];

export const refetchAllChainsaws = async () => {
    const allChainsaws = await getAllChainsaws();
  
    chainsaws = allChainsaws;
  
    renderItemsList(chainsaws, onEditItem, onRemoveItem);
  };

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    const { name, power, price } = getInputValues();
  
    clearInputs();
  
    postChainsaw({
      name,
      power,
      price
    }).then(refetchAllChainsaws);
  });


searchButton.addEventListener("click", () => {
    const foundChainsaws = chainsaws.filter(
      (chainsaw) => chainsaw.name.search(searchInput.value) !== -1);
      renderItemsList(foundChainsaws, onEditItem);
});
  
clearSearchButton.addEventListener("click", () => {
  renderItemsList(chainsaws, onEditItem);
    searchInput.value = "";
});
  
sortCheckbox.addEventListener("change", function (e) {
      if (this.checked) {
          const sortedChainsaws = Chainsaws.sort(
              (card1, card2) => parseFloat(card1.volume) - parseFloat(card2.volume));
              renderItemsList(sortedChainsaws, onEditItem);
      }
      else {
          refetchallChainsaws();
      }
});
  
  
  countButton.addEventListener("click", () => {
      let sum = Chainsaws.map(o => o.price).reduce((a, c) => { return a + c });
      document.getElementById("total-price").innerText = sum;
      console.log(sum);
  })
