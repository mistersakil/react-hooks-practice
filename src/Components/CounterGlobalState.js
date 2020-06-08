import React, { Fragment,useEffect, useContext } from "react";
import {counterContext} from '../AppState'

export default () => {
  	const setCounterHandler = useContext(counterContext)
  	useEffect(() => {
		console.log('useEffect called from Global Component')
		document.title = 'Global'

	})
  	return (
    	<Fragment>
     	<h3>Counter Global State</h3>
     	<button onClick={() => setCounterHandler()}>Increment</button>
    	</Fragment>
  );
};
