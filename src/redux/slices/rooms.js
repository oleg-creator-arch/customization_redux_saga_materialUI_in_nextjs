import React, {useEffect, useState} from 'react';
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    collection: [],
    meta: {},
    loading: true,
    error: null,
}

const slice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        reset: () => initialState,
        roomsRequested: (state, action) => {
            console.log('ACTION', action)
            state.loading = true
        },
        roomSucceeded: (state, action) => {
            state.loading = false
            state.collection = action.payload.rooms
        },
        roomsFailed: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
    },
});

export const { reset, roomsRequested, roomSucceeded, roomsFailed } = slice.actions;

export default slice.reducer;