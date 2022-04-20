import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use((request) => {

});

api.interceptors.response.use((response) => {
    
});

export { api };