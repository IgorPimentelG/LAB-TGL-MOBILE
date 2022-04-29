import { ICartStore } from '@shared/model/interfaces/states';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ICartStore = {
    cart: []
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBet: (state, action) => {
            return {
                cart: [...state.cart, action.payload]
            };
        },

        removeBet: (state, action) => {
            const cart = state.cart.filter((item) => item.id !== action.payload);
            return { cart };
        },

        clearCart: () => {
            return initialState;
        }
    }
});

export const cartActions = CartSlice.actions;
export default CartSlice;