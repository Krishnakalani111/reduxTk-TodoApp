import { configureStore } from '@reduxjs/toolkit';
import todoReducer  from './features'

export default configureStore({
    reducer: {
        todo: todoReducer
    }
});