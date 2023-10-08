// utils/react-query.js
import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3/";

export const fetchMovies = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}movie/popular?api_key=cc4737d2c4b97f59bb4e7dc20242d923&language=en-US&page=1`
        );
        return response.data.results;
    } catch (error) {
        throw error;
    }
};
