import React, {useReducer, Fragment, createContext} from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
export const counterContext = createContext()
let initialState = {counterValue : 0}

export default function App() {
	const [counter, dispatch] = useReducer(reducer, initialState)
	function reducer (currentState, action) {
		switch(action){
			case 'in':
			return {counterValue: currentState.counterValue + 1 }
			case 'out':
			return {counterValue: currentState.counterValue - 1 }
			case 'reset':
			return initialState
			default:
			return {counterValue: currentState.counterValue }
		}
	}
  	return (
  	    <Fragment>
  	    <counterContext.Provider value={dispatch}>
  	    	<h1>App Component</h1>
  	    	<p>Counter: {counter.counterValue}</p>
		    <button onClick={() => dispatch('in') }>Increment From App Component</button>
  	        <ComponentA counter={counter.counterValue} dispatch={dispatch} />
  	        <ComponentB  />
  	    </counterContext.Provider>
  	    </Fragment>
  	); 
}
