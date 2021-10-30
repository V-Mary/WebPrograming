import {
    getInputValues,
    clearInputs,
    renderItemsList,
    addItemToPage,
    EDIT_BUTTON_PREFIX
} from "./dom.js";

const formField = document.getElementById("item_form");
const submitButton = document.getElementById("submit_button");

const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");


const CHAINSAW = [
  { id:1, name: "BOO", power:800, price:500},
  { id:2, name: "SKM", power:100, price:200},
  { id:3, name: "PowerHY", power:300,  price:140},
  { id:4, name: "YourBest", power:500, price:800},
  { id:5, name: "Chainsaw", power:260, price:350},
  { id:6, name: "SuperChainsaw", power:400, price:400},
  { id:7, name: "BlaBla", power:480, price:270},
]
export const getAllChainsaws = () => {
  return CHAINSAW;
};
export const postChainsaws = (body) => {
    CHAINSAW.push(body);
}

export const updateChainsaws = (id, body) => {
    let index = CHAINSAW.findIndex(idx => idx.id == id);
    CHAINSAW[index].name = body.name;
    CHAINSAW[index].power = body.power;
    CHAINSAW[index].price = body.price;
}


let chainsaws = [];

const onEditItem = async (element) => {
    const itemId = element.target.id.replace(EDIT_BUTTON_PREFIX, "");

    await updateChainsaws(itemId, getInputValues())
    clearInputs();

    refetchAllChainsaws();
};


export const refetchAllChainsaws = () => {
    const allChainsaws = getAllChainsaws();

    chainsaws = allChainsaws.sort((a, b) => b.name.localeCompare(a.name));

    renderItemsList(chainsaws, onEditItem);
};

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const {name, power, price } = getInputValues();

    clearInputs();

    addItemToPage({name, power, price})

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
