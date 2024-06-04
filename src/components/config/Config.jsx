import axios from "axios";
// const apiKey = "Badmash@2015";
const apiBaseUrl = "http://143.244.128.132/kismetapp/Api";

export const apiClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "Badmash@2015", // Using environment variable
    },
});
