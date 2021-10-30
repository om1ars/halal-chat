import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        roomId: null,
    },
    reducers: {
        enterRoom: (action, payload) => {
            state.roomId = action.
        },
    }
})

export const {increment, decrement, incrementByAmount} = appSlice.actions


export const 