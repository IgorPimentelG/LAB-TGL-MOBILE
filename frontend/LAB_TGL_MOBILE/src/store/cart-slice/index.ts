import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {
        addBet: () => {

        },

        removeBet: () => {
            
        }
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice;