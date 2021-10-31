const itemsContainer = document.getElementById("container__items");

const nameInput = document.getElementById("name_input");
const powerInput = document.getElementById("power_input");
const priceInput = document.getElementById("price_input");

export const EDIT_BUTTON_PREFIX = 'edit-button-';

const getItemId = (id) => `item-${id}`

const itemTemplate = ({id, name, power, price}) => `
<li id="${getItemId(id)}" class="item-card">
    <div>
        <h5>${name}</h5>
        <p>Power: ${power} V</p>
        <p>Price: ${price} $</p>
    </div>
    <div>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">Edit</button>
    </div>
</li>`;

export const clearInputs = () => {
    nameInput.value = "";
    powerInput.value = "";
    priceInput.value = "";
};

export const addItemToPage = ({id, name, power, price}, onEditItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({id, name, power, price})
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    editButton.addEventListener("click", onEditItem);


};
export const renderItemsList = (items, onEditItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem);
    }
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        power: powerInput.value,
        price: priceInput.value,
    };
};