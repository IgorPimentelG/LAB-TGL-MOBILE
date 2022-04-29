import { createSlice } from '@reduxjs/toolkit';
import { ILoadingStore } from '@shared/model/interfaces/states';

const initialState: ILoadingStore = {
    isLoading: false,
    message: '' 
}

const LoadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        enableLoading: (_state, action) => {
            return {
                isLoading: true,
                message: action.payload
            };
        },

        disableLoading: () => {
            return initialState;
        }
    }
});

export const loadingActions = LoadingSlice.actions;
export default LoadingSlice;