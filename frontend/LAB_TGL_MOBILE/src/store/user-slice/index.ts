import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { IUserStore } from './../../shared/model/interfaces/states';

const initialState: IUserStore = {
    data: null,
    token: null,
    lastSession: null,
    isAuthenticated: true
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticate: (state, action) => {
            return {
                data: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
                lastSession: null
            }
        },

        logout: () => {
            AsyncStorage.clear();
            return {
                ...initialState,
                lastSession: new Date().toISOString()
            };
        }
    }
});

export const userActions = UserSlice.actions;
export default UserSlice;

