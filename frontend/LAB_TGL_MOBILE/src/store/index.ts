import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './user-slice';
import GamesSlice from './games-slice';
import LoadingSlice from './loading-slice';
import CartSlice from './cart-slice';
import reactotron from '../config/reactotron';

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        games: GamesSlice.reducer,
        loading: LoadingSlice.reducer,
        cart: CartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

/*
* devTools: true,
* enhancers: [reactotron.createEnhancer!()]
*/