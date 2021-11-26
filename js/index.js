import {
    getInputValues,
    renderItemsList,
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    clearInputs
} from "./dom_util.js";

import { 
    getAllChainsaws,
    postChainsaw,
    updateChainsaw,
    deleteChainsaw
} from "./api.js";

const submitButton = document.getElementById("submit_button");
const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let chainsaws = [];

const onEditItem = async (e) => {

    const itemId = e.target.id.replace(EDIT_BUTTON_PREFIX, "");

    console.log(itemId);

    await updateChainsaw(itemId, getInputValues());

    clearInputs();

    refetchAllChainsaws();
};

const onDeleteItem = async (e) => {
    const itemId = e.target.id.replace(DELETE_BUTTON_PREFIX, "");

    await deleteChainsaw(itemId);
    console.log(itemId);
    refetchAllChainsaws();
}

export const refetchAllChainsaws = async () => {
    const allChainsaws = await getAllChainsaws();

    chainsaws = allChainsaws.chainsaws.sort((a, b) => b.name.localeCompare(a.name));

    renderItemsList(chainsaws, onEditItem, onDeleteItem);
};


submitButton.addEventListener("click", async (event) => {
    event.preventDefault();


    const { name, power, price } = getInputValues();

    clearInputs();

    postChainsaw({
        name, 
        power,
        price
    }).then(refetchAllChainsaws());


});

searchButton.addEventListener("click", () => {
    const foundChainsaws = chainsaws.filter((chainsaw) => chainsaw.name.search(searchInput.value) !== -1);

    renderItemsList(foundChainsaws, onEditItem, onDeleteItem);
});

clearSearchButton.addEventListener('click', () => {
    renderItemsList(chainsaws, onEditItem, onDeleteItem);

    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function() {
    if (this.checked) {
        const sortedChainsaws = chainsaws.sort(
            (a, b) => parseInt(a.price) - parseInt(b.price));

        renderItemsList(sortedChainsaws, onEditItem, onDeleteItem);
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