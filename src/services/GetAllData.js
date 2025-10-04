import BASE_URL from "../UrlBase";

export const getAllData = async () => {
    try {
        const response = await fetch(`${BASE_URL}/outstanding-balance`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return []; 
    }
};