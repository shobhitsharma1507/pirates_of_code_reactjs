// components/api/api.js
import axios from "axios";

export const fetchCategories = async () => {
    const response = await axios.get(
        "https://pirates-of-code-backend.vercel.app/api/categories"
    );
    return response.data;
};

export const updateData = async (data) => {
    await axios.post(
        "https://pirates-of-code-backend.vercel.app/api/update",
        data
    );
};
