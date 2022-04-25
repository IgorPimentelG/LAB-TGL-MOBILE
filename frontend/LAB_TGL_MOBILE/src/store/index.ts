import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './user-slice';
import GamesSlice from './games-slice';
import LoadingSlice from './loading-slice';

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        games: GamesSlice.reducer,
        loading: LoadingSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;