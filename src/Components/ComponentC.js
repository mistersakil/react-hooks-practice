import React, { Fragment, useContext } from "react";
import {counterContext} from '../App'
export default props => {
  const dispatch = useContext(counterContext)
  return (
    <Fragment>
      <h1>Component - C</h1>
      <button onClick={() => dispatch('in') }>Increment From Component - C</button>
     <button onClick={() => dispatch('out') }>Decrement From Component - C</button>
     <button onClick={() => dispatch('reset') }>Reset From Component - C</button>
    </Fragment>
  );
};
