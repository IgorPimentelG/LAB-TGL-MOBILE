import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './user-slice';
import LoadingSlice from './loading-slice';

const store = configureStore({
    reducer: {
        auth: AuthSlice.reducer,
        loading: LoadingSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;