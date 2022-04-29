import { createSlice } from '@reduxjs/toolkit';
import { IGamesStore } from '@shared/model/interfaces/states';

const initialState: IGamesStore = {
    min_cart_value: null,
    types: []
};

const GamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        loadGames: (_state, action) => {
            console.log(action.payload);
            return {
                ...action.payload
            }
        }
    }
});

export const gamesActions = GamesSlice.actions;
export default GamesSlice;