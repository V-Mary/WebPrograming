const BASE_URL = "http://localhost:5000";
const RESOURCE_URL = `${BASE_URL}/chainsaw`;

const baseRequest = async ({urlPath = "", method = "GET", body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Access-Control-Allow-Methods": "GET, POST, PUT",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body)
        }

        return await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);
    } catch (error) {
        
    }
};

export const getAllChainsaws = async () => {
    const rawRes = await baseRequest({ method: "GET" });
    return await rawRes.json();
};

export const postChainsaw = (body) => baseRequest({
    method: "POST", body
});

export const updateChainsaw = (id, body) => baseRequest({
    urlPath: `/${id}`, method: "PUT", body
});

export const deleteChainsaw = (id) => baseRequest ({
    urlPath: `/${id}`, method: "DELETE"
});