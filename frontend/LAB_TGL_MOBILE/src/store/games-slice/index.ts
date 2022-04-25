import { createSlice } from '@reduxjs/toolkit';
import { IGamesStore } from '@shared/model/interfaces/states';

const initialState: IGamesStore = {
    minCartValue: null,
    types: []
};

const GamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        loadGames: (_state, action) => {
            return {
                ...action.payload
            }
        }
    }
});

export const gamesActions = GamesSlice.actions;
export default GamesSlice;