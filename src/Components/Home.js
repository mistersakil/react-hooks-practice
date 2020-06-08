import React, { Fragment, useContext,useEffect } from "react";
import {counterContext} from '../AppState'

export default () => {
	const setCounterHandler = useContext(counterContext)
	useEffect(() => {
		console.log('useEffect called from Home Component')
		document.title = 'Home'
	})
  	return (
    	<Fragment>
     	<h3>Home State</h3>
     	<button onClick={() => setCounterHandler()}>Increment</button>
    	</Fragment>
  	);
};
