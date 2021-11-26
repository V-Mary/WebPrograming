export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = 'delete-button-';

const nameInput = document.getElementById("name_input");
const powerInput = document.getElementById("power_input");
const priceInput = document.getElementById("price_input");
const itemsContainer = document.getElementById("container__items");

const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, name, power, price }) => `
<li id="${getItemId(id)}" class="item-card">
    <div>
        <h5>${name}</h5>
        <p>Power: ${power}</p>
        <p>Price: ${price}</p>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button" class="default_button">Edit</button>
        <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="default_button">Delete</button>
    </div>
</li>`;

export const addItemToPage = ({id, name, power, price}, onEditItem, onDeleteItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, name, power, price})
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);

    editButton.addEventListener("click", onEditItem);
    deleteButton.addEventListener("click", onDeleteItem);
};

export const renderItemsList = (items, onEditItem, onDeleteItem) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item, onEditItem, onDeleteItem);
    }
};

export const clearInputs = () => {
    nameInput.value = "";
    powerInput.value = "";
    priceInput.value = "";
};

export const getInputValues = () => {
    return {
        name: nameInput.value,
        power: powerInput.value,
        price: priceInput.value,
    };
};