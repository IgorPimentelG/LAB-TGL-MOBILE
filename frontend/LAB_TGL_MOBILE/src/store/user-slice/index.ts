import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { IUserStore } from './../../shared/model/interfaces/states';

const initialState: IUserStore = {
    data: null,
    token: null,
    isAuthenticated: false
};

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authenticate: (_state, action) => {
            return {
                data: action.payload.user,
                token: action.payload.token,
                isAuthenticated: true
            }
        },

        logout: () => {
            AsyncStorage.clear();
            return initialState;
        }
    }
});

export const userActions = UserSlice.actions;
export default UserSlice;

