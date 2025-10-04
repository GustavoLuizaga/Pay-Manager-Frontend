import BASE_URL from "../UrlBase";

export const createNewOutstandingBalance = async (newBalance) => {

    try {
        const response = await fetch(`${BASE_URL}/outstanding-balance`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBalance)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}, `);

        }

        return response;

    } catch (error) {
        console.error("Error creating new outstanding balance:", error);
    }
}