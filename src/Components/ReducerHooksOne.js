import React, {Fragment, useReducer, useEffect } from "react";
const initialCounterState = { count:0 }
function reducerCounter(currentState, action){
  switch(action.type){
    case 'in':
      return {count: currentState.count + 1}
    default:
      return currentState
  }

}
export default props => {  

  const [counter, dispatch] = useReducer(reducerCounter, initialCounterState)
  // useEffect(() => {
    
    
  // }, [])
  return (
    <Fragment>
      <h1>Reducer Hooks: Global State Management</h1>
      <h3>Counter value: {counter.count}</h3>
      <button onClick={() => dispatch({type: 'in'})}>Increase</button>
    </Fragment>
  );
};

