import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = { counter: 0, showCounter: true }

// create a global variable which stors all the information
// createSlice() for counter
const counterSlice = createSlice(//use createSlice to store latest state and reducer function
    // advantage of using createSlice is we can mutate the state
    {
        name: 'counter',
        initialState: initialCounterState,
        reducers: //here we are creating one reducer function but we can create multiple reducer functions
        {
            Increment(state, action) //method consist of state and action
            {
                state.counter++//we can mutate the state using redux toolkit and state should not shoud be mutated without using redux toolkit
            },
            Decrement(state, action) {
                state.counter--
            },
            increase(state, action)//method consist of state and action
            {
                state.counter = state.counter + action.payload;//payload which carries extra informaion
            },
            toggleHandler(state, action) {
                state.showCounter = !state.showCounter
            },
            reset(state) {
                state.counter = 0
            }
        }
    }
)
export const counterActions = counterSlice.actions

export default counterSlice