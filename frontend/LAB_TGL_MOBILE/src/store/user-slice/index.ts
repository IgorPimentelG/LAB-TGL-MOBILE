import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { IUserStore } from '@shared/model/interfaces/states';

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
            return {
                data: {
                    bets: [],
                    ...action.payload.user,
                },
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

        updateUser: (state, action) => {
            return {
                ...state,
               data: {
                   ...state.data!,
                   name: action.payload.name,
                   email: action.payload.email
               } 
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

