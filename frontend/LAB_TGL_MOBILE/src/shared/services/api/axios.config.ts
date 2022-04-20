import axios, { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://192.168.1.100:3333',
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
    async (request) => {

        const token = await AsyncStorage.getItem('@token');

        if( token ) {
            const userToken = JSON.parse(token);
            request.headers!.Authorization = `${userToken.type} ${userToken.token}`;
        }

       return request;
    },

    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    async (response) => {
        
        const token = response.data.token;

        if( token ) {
            await AsyncStorage.clear();
            await AsyncStorage.setItem('@token', JSON.stringify(token));
        }
    
        return response;
    },

    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export { api };