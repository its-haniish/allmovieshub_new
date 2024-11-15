import { createReducer } from "@reduxjs/toolkit";

const initialState = "";

export const searchReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('SET_SEARCH', (state, action) => action.payload)
        .addCase('CLEAR_SEARCH', () => initialState);
});
