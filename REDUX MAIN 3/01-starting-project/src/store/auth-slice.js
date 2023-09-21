import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
}

// we will create another creatSlice() another for checking authentication of user
const authSlice = createSlice(
    {
        name: 'authentication',
        initialState: initialAuthState,
        reducers:
        {
            login(state, action) {
                state.isAuthenticated = true
            },
            logout(state, action) {
                state.isAuthenticated = false
            }
        }
    }
)

export const authActions = authSlice.actions

export default authSlice;