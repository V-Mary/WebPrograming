const itemsContainer = document.getElementById("container__items");
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

const getAllChainsaws = () => {
  return CHAINSAW;
};

const getItemId = (id) => `item-${id}`

const itemTemplate = ({id, name, power, price}) => `
<li id="${getItemId(id)}" class="item-card">
    <div>
        <h5>${name}</h5>
        <p>Power: ${power} V</p>
        <p>Price: ${price} $</p>
    </div>
</li>`;

const addItemToPage = ({id, name, power, price}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, name, power, price})
    );
};

const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};

let chainsaws = [];

const refetchAllChainsaws = () => {
    const allChainsaws = getAllChainsaws();

    chainsaws = allChainsaws.sort((a, b) => b.name.localeCompare(a.name));

    renderItemsList(chainsaws);
};

searchButton.addEventListener("click", () => {
    const foundChainsaws = chainsaws.filter((chainsaw) => chainsaw.name.search(searchInput.value) !== -1);

    renderItemsList(foundChainsaws);
});

clearSearchButton.addEventListener('click', () => {
    renderItemsList(chainsaws);

    searchInput.value = "";
});


sortCheckbox.addEventListener("change", function() {
  if (this.checked) {
      const sortedChainsaws = chainsaws.sort(
          (a, b) => parseInt(a.price) - parseInt(b.price));

      renderItemsList(sortedChainsaws);
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