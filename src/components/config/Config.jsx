import axios from "axios";
// const apiKey = "Badmash@2015";
//const droplet = f8ab213cf38be2a5f397f78564;
const apiBaseUrl = "https://bookdeets.com/kismetapp/Api";

export const apiClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "Badmash@2015", // Using environment variable
    },
});
