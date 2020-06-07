import React, { Fragment, useContext } from "react";
import {counterContext} from '../App'

export default () => {
	  const dispatch = useContext(counterContext)
  return (
    <Fragment>
     <h1>Component A</h1>
     <button onClick={() => dispatch('in') }>Increment From Component - A</button>
     <button onClick={() => dispatch('out') }>Decrement From Component - A</button>
     <button onClick={() => dispatch('reset') }>Reset From Component - A</button>
    </Fragment>
  );
};
