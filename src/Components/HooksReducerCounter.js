import React, {Fragment, useReducer } from "react";

const initialCount = 0

const reducer = (currentCount, action) => {
	switch(action){
		case 'in':
			return currentCount + 1
		case 'out':
			return currentCount > 0 ? currentCount - 1 : initialCount
		case 'reset':
			return initialCount
		default:
			return currentCount
	}

}

export default () => {
	const [count, dispatch] = useReducer(reducer, initialCount)
	const [count2, dispatch2] = useReducer(reducer, 5)


	return (
		<Fragment>
		  	<h1>useReducer Hook</h1>
			<p>{count}</p>
			<p>{count2}</p>
			<div>
				<button onClick={() => dispatch('in')}>Increment</button>
				<button  onClick={() => dispatch('out')}>Decrement</button>
				<button  onClick={() => dispatch('reset')}>Reset</button>
			</div>
			<div>
				<button onClick={() => dispatch2('in')}>Increment</button>
				<button  onClick={() => dispatch2('out')}>Decrement</button>
				<button  onClick={() => dispatch2('reset')}>Reset</button>
			</div>
	  	</Fragment>
  	)
};
