import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        roomId: null,
    },
    reducers: {
        enterRoom: state => {
            state.value +=1;
        },
    }
})

export const {increment, decrement, incrementByAmount} = appSlice.actions


export const 