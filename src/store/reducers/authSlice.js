import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authKey: null,
        isAuth: false
    },
    reducers: {
        setAuthKey(state, action) {
            console.log('setAuthKey called.');
            state.authKey = action.payload;
            state.isAuth = !!action.payload;
        },
    },
});

// exports
export const selectIsAuth = state => state.auth.isAuth;
const { actions, reducer: authReducer } = authSlice;
export const { setAuthKey } = actions;
export default authReducer;