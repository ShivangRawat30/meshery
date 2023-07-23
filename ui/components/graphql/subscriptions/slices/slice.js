import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addonStatus: null,
    loading: false,
    error: null,
};

const addonStatusSlice = createSlice({
    name: 'addonStatus',
    initialState,
    reducers:{
        setAddonStatus: (status, action) => {
            state.addonStatus = action.payload;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state) => {
            state.loading = true;
            state.error = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { setData, setLoading, setError} = addonStatusSlice.actions;
