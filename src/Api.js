import axios from "axios";

const BASE_URL = "http://localhost:5000/item"

const http = axios.create({
    baseURL: "http://localhost:5000/item",
    headers: {
        'Content-type': 'application-json'
    }
});

export const getItem = async (id) => {
    const rawResponse = await http.get(`${BASE_URL}/${id}`);
    return rawResponse.data
}
export const getItemList = async (name = '', power = '', price = '') => {
    const rawResponse = await axios.get(`http://localhost:5000/item?&name=${name}`)
    console.log(name)
    return rawResponse.data
}
