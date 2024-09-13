import axios from "axios";

const apiRequest = async ({
    method,
    url,
    data,
    version,
    isMultipart = false,
    params,
}) => {
    let response = null,
        error = null;
    let options = {
        method,
        url: `http://localhost:5000/api/${
            //`${process.env.REACT_APP_VERCEL_API_URL}/${
            version || "v1"
        }/${url}`,
        headers: {
            Accept: "application/json",
            "Content-Type": isMultipart
                ? "multipart/form-data"
                : "application/json",
        },
        data: data,
        params: params || {},
    };
    try {
        response = await axios(options);
    } catch (err) {
        console.log("API error: ", err);
        error = err;
    }
    return { response, error };
};

export default apiRequest;
