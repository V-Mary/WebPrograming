import {
    getInputValues,
    clearInputs,
    renderItemsList,
    EDIT_BUTTON_PREFIX} from "./dom.js";

import  {
    postChainsaws,
    getAllChainsaws,
    updateChainsaws}from "./Items.js"

const submitButton = document.getElementById("submit_button");
const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let chainsaws = [];

const onEditItem = async (element) => {
    const itemId = element.target.id.replace(EDIT_BUTTON_PREFIX, "");

    await updateChainsaws(itemId, getInputValues())
    clearInputs();

    refetchAllChainsaws();
};

const refetchAllChainsaws = async () => {
    const allChainsaws = await getAllChainsaws();

    chainsaws = allChainsaws.sort((a, b) => b.name.localeCompare(a.name));

    renderItemsList(chainsaws, onEditItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {name, power, price } = getInputValues();

    clearInputs();

    postChainsaws({name, power,price});

    refetchAllChainsaws();
});

searchButton.addEventListener("click", () => {
    const foundChainsaws = chainsaws.filter((chainsaw) => chainsaw.name.search(searchInput.value) !== -1);

    renderItemsList(foundChainsaws, onEditItem);
});

clearSearchButton.addEventListener('click', () => {
    renderItemsList(chainsaws, onEditItem);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function() {
  if (this.checked) {
      const sortedChainsaws = chainsaws.sort(
          (a, b) => parseInt(a.price) - parseInt(b.price));

      renderItemsList(sortedChainsaws, onEditItem);
  } else {
      refetchAllChainsaws();
  }
});

countButton.addEventListener("click", () => {
    let sum = chainsaws.map(o => o.price).reduce((a, c) => { return a + c });
    document.getElementById("total-price").innerText = sum;
    console.log(sum);
});

refetchAllChainsaws();
