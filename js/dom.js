const nameInput = document.getElementById("name_input");
const powerInput = document.getElementById("power_input");
const priceInput = document.getElementById("price_input");

const itemsContainer = document.getElementById("items_container");

const itemTemplate = ({ id, name, power, price }) => `
<li id="${id}" class="item-card">
  <img
    src="https://storgom.ua/cache/i/products/11/48620/81751-benzopila-echo-cs-501sx_3-1000x1000-product_popup.1200x628.jpg"
    class="item-container__image" alt="card">
  <div>
    <h5>${name}</h5>
    <p>${power}</p>
    <p>Price: ${price}</p>
  </div>
</li>`;

export const clearInputs = () => {
  nameInput.value = "";

  powerInput.value = "";

  priceInput.value = "";
};

export const addItemToPage = ({ _id: id, name, power, price }) => {
    itemsContainer.insertAdjacentHTML(
      "afterbegin",
      itemTemplate({ id, name, power, price })
    );  
};
export const renderItemsList = (items, onEditItem, onRemoveItem) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEditItem, onRemoveItem);
  }
};
export const getInputValues = () => {
  return {
    name: nameInput.value,
    power: powerInput.value,
    price: priceInput.value
  };
};
