import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./reducers/searchReducer";

const rootReducer = {
    search: searchReducer, // Use 'search' as the key for this slice of state
};

const store = configureStore({
    reducer: rootReducer, // Pass the object of reducers
});

export default store;
