import axios from 'axios'
// const apiKey = "Badmash@2015";
//const droplet = f8ab213cf38be2a5f397f78564;
const apiBaseUrl = 'https://bookdeets.com/kismetapp/Api'
const apiPaymentUrl = 'https://bookdeets.com/kismetapp/Payment'
export const apiClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'Badmash@2015', // Using environment variable
    },
})

export const apiPayment = axios.create({
    baseURL: apiPaymentUrl,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'Badmash@2015', // Using environment variable
    },
})
