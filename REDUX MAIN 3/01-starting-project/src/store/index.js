import { createStore } from 'redux'
import counterSlice from './counter-slice';
import { createSlice, configureStore } from "@reduxjs/toolkit"//import createSlice() from redux toolkit
import authSlice from './auth-slice';

// we can access each method inside the reducer function using actions to dispatch particular actions and this methods are called action creators

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions//export actions which store all the methods inside the reducer function
export const authActions = authSlice.actions

export default store;
// configureStore and createStore are not the same. They serve similar purposes in that they both create Redux stores, but they come from different libraries and have some important differences.
// we paas object inside configureStore()
// That's correct. The counterSlice.actions object generated by createSlice does not include the initial state (initialCounterState in your case). It only contains the action creators corresponding to the reducer functions you've defined within the createSlice call.

// The purpose of counterSlice.actions is to provide a convenient way to access and dispatch actions associated with the counter slice of your Redux store. These actions are used to update the state managed by the counter slice, but they don't include the initial state itself. The initial state is typically accessed and used directly when initializing your Redux store, not through counterSlice.actions.

// counterSlice.reducer contains the combined reducer function and the initial state for the counter slice. It incorporates both the initial state (initialCounterState in your case) and all the reducer functions you've defined within the createSlice call.

// So, counterSlice.reducer includes both the initial state and the logic for handling state updates based on the actions defined in the reducers object.


