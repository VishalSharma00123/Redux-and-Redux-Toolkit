// redux is imported by using require() method  which also used to import third party library
// the 3rd party library or any other file which we want to import is inserted inside the require(''), here we are importing reduxn which is a 3rd party library for state managment
// for redux we need 
const redux = require('redux');

// create a reducer function,it consist of the current state and the action
// state should have a default value othewise it wont work
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return { counter: state.counter + 1 }
    }
    if (action.type === 'DECREMENT') {
        return { counter: state.counter - 1 }
    }
    return state;
}
// and we need to use createStore and paas the reducer function inside the createStore because the store needs to know which reducer fucntionis responsible for changing or updating
// configureStore() and createStore() are also similar
const store = redux.createStore(counterReducer);
// getState() and useSelector() are similar
console.log(store.getState());
// this countersubscriber executed or triggered whenever our state changes
const countersubscriber = () => {
    const latestState = store.getState();//accessing the latest using getState() method
    console.log(latestState);
}

store.subscribe(countersubscriber);//here we are not executing countersubscriber() function we are just pointing it

store.dispatch({ type: 'INCREMENT' })//we will dipatch an action based on type 
// after dispatching the counter will run again and counter  will become 2
store.dispatch({ type: 'DECREMENT' })