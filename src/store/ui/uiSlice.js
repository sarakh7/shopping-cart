
import { createSlice } from '@reduxjs/toolkit';
const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        notification: {
            type: '',
            message: ''
        },
        showNotification: false
    },
    reducers: {
        sendNotification: (state, action) => {
            state.notification = action.payload
            state.showNotification = true;
        },
        hideNotification: (state) => {
            state.showNotification = false;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;