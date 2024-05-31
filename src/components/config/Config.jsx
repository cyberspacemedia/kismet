import axios from "axios";
// const apiKey = "Badmash@2015";
const apiBaseUrl = "http://localhost:8888/kismet/Backend/Api";

export const apiClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "Badmash@2015", // Using environment variable
    },
});
