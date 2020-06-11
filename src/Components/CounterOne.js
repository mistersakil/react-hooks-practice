import React, {Fragment, useState} from 'react'

const CounterOne = ({initialCount}) => {
	const [count, setCount] = useState(initialCount)
	return (
	    <Fragment>
	    	<h1>Count value: {count}</h1>
	    	<button onClick={() => setCount(initialCount)}>Reset</button>
	    	<button onClick={() => setCount(count + 1)}>+</button>
	    	<button onClick={() => setCount(count - 1)}>-</button>
	    	<button onClick={() => setCount(prevCount => prevCount + 1)}>+ Functional</button>
	    	<button onClick={() => setCount(prevCount => prevCount - 1)}>- Functional</button>
	    </Fragment>
	)

}
export default CounterOne