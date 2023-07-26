import { configureStore } from '@reduxjs/toolkit'
import persistedReducer from './reducers';
import { persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store); // persist store 내보내기