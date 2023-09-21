import classes from './Counter.module.css';
import { useDispatch, useSelector, connect } from 'react-redux';
import { counterActions } from '../store/counter-slice';
// FBC
const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter.counter);

  const show = useSelector(state => state.counter.showCounter);

  const IncreamentHandler = () => {
    dispatch(counterActions.Increment());
  }

  const increaseHandler = () => { // Use the correct action type here
    dispatch(counterActions.increase(10)); //{type:unique ID,payload:10}
    // Correct action type and include the 'amount'
    // 2nd argument amount is a payload which decide by hoe many value it should increase
    console.log("increase by 5");
  }

  const DecreamentHandler = () => {
    dispatch(counterActions.Decrement());
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleHandler());
  };

  const resetHandler = () => {
    dispatch(counterActions.reset());
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&
        <div className={classes.value}>{counter}</div>}
      <div >
        <button onClick={IncreamentHandler}>Increament</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={DecreamentHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button><br />
      <button onClick={resetHandler} style={{ width: "31%" }}>Reset</button>
    </main >
  );
};
export default Counter

// CBC
// class Counter extends Component {

//   // in Class based component we use connect to use redux in class component because we cannot use hooks in CBC like useDispatch() and useSelector()
//   IncreamentHandler = () => {
//     this.props.Increament();
//   }
//   DecreamentHandler = () => {
//     this.props.Decrement();
//   }
//   toggleCounterHandler = () => {

//   };


//   constructor() {
//     super()
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div >
//           <button onClick={this.IncreamentHandler.bind(this)}>Increament</button>
//           <button onClick={this.DecreamentHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// // this function is equivalent to useSelector() in FBC
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// // this function is equivalent to useDispatch() in FBC
// const mapsDispatchToProps = dispatch => {
//   return {
//     Increament: () => dispatch({ type: 'Increament' }),
//     Decrement: () => dispatch({ type: 'Decrement' })
//   }
// };

// export default connect(mapStateToProps, mapsDispatchToProps)(Counter);



