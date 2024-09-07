import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';

export default function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
