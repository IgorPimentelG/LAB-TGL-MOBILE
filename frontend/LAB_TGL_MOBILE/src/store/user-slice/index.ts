import { IUserStore } from './../../shared/model/interfaces/states';
import { createSlice } from '@reduxjs/toolkit';

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
            return initialState;
        }
    }
});

export const UserActions = UserSlice.actions;
export default UserSlice;

