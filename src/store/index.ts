import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './slices/contactsSlice';
import { covidApi } from '@/components/graphs/api';

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        [covidApi.reducerPath]: covidApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(covidApi.middleware),
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store;
