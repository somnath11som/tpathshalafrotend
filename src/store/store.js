import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../modules/global/slice/index';

const store = configureStore({
	reducer: {
		theme: themeReducer,
		// Add other reducers here
	},
});

export default store;
