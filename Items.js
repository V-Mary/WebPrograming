const CHAINSAW = [
    { id:1, name: "BOO", power:800, price:500},
    { id:2, name: "SKM", power:100, price:200},
    { id:3, name: "PowerHY", power:300,  price:140},
    { id:4, name: "YourBest", power:500, price:800},
    { id:5, name: "Chainsaw", power:260, price:350},
    { id:6, name: "SuperChainsaw", power:400, price:400},
    { id:7, name: "BlaBla", power:480, price:270},
];
export const getAllChainsaws = () => {
    return CHAINSAW;
};
export const postChainsaws = (body) => {
    CHAINSAW.push(body);
};
export const updateChainsaws = (id, body) => {
    let index = CHAINSAW.findIndex(idx => idx.id == id);
    CHAINSAW[index].name = body.name;
    CHAINSAW[index].power = body.power;
    CHAINSAW[index].price = body.price;
};
