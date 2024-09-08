import axios from 'axios';

export const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('There was an error fetching the data!', error);
        throw error;
    }
};
