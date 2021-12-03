const BASE_URL = "http://localhost:5000";
const RES_URL = `${BASE_URL}/chainsaw`;

const baseRequest = async ({ urlPath: url_path = "", method = "GET", body = null }) => {
    try {
        const req_params = {
            headers: {
                "Content-Type": "application/json",
            },
            method,
            body
        };

        if (body) {
            req_params.body = JSON.stringify(body);
        }

        return await fetch(`${RES_URL}${url_path}`, req_params);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getItemList = async () => {
    const rawResponse = await baseRequest({ method: "GET" });

    return await rawResponse.json();
};

export const getItem = async (id) => {
    const rawResponse = await baseRequest({urlPath: `/${id}`, method: "GET"})

    return await rawResponse.json();
}

export const postOrder = async (body) =>
    baseRequest({ method: "POST", body });

export const updateOrder = async (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteOrder = async (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });