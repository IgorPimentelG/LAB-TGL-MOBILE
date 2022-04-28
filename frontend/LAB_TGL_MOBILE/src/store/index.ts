import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './user-slice';
import GamesSlice from './games-slice';
import LoadingSlice from './loading-slice';
import CartSlice from './cart-slice';
import reactotron from '../config/reactotron';
import { compose } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        games: GamesSlice.reducer,
        loading: LoadingSlice.reducer,
        cart: CartSlice.reducer
    },
    devTools: true,
    enhancers: [reactotron.createEnhancer!()]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;