import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { IUserStore } from './../../shared/model/interfaces/states';

const initialState: IUserStore = {
    data: null,
    token: null,
    lastSession: null,
    isAuthenticated: false
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticate: (_state, action) => {
            action.payload.user.bets = [];
            return {
                data: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true,
                lastSession: null
            };
        },

        updateBetsUser: (state, action) => {
            return {
                ...state,
                data: action.payload
            };
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

