import axios, { AxiosError } from 'axios';
import { mountError } from '@shared/util';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
    baseURL: 'http://192.168.18.10:3333',
    headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(
    async (request) => {

        const token = await AsyncStorage.getItem('token');

        if( token ) {
            const userToken = JSON.parse(token);
            request.headers!.Authorization = `${userToken.type} ${userToken.token}`;
        }

       return request;
    },

    (error: AxiosError) => {
        const errorFormated = mountError(error);
        return Promise.reject(errorFormated);
    }
);

api.interceptors.response.use(
    async (response) => {

        const urlRequest = response.request._url;

        // Verificar se o token não é do reset-password
        if( !urlRequest.match(/.{1,}\/reset+$/g) ) {
            const token = response.data.token;
    
            if( token ) {
                await AsyncStorage.clear();
                await AsyncStorage.setItem('token', JSON.stringify(token));
            }
        }
        
        return response;
    },

    (error: AxiosError) => {
        const errorFormated = mountError(error);
        return Promise.reject(errorFormated);
    }
);

export { api };