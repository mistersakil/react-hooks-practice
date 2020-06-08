import React, {Fragment, createContext, useEffect, useState} from "react";
import CounterGlobalState from "./Components/CounterGlobalState";
import Home from "./Components/Home";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
export const counterContext = createContext(0)

export default function App() {
	const [counter, setCounter] = useState(0)
	useEffect(() => {
		console.log('useEffect called from AppState')
	})
	const setCounterHandler = () => setCounter(prevCount => prevCount + 1)
  	return (
  	    <Fragment>
	  	    <Router>
		  	    <counterContext.Provider value={setCounterHandler}>
		  	    	<h1>Global State Management Example</h1>
		  	    	<h2>Counter Value: <small>{counter}</small></h2>
		  	    	<button onClick={() => setCounterHandler()}>Increment</button>
		  	    	<nav>
	  	    			<li><Link to="/" exact>Home</Link></li>
	  	    			<li><Link to="/global" >Global</Link></li>
		  	    		
		  	    	</nav>
		  	    	<Switch>
		  	    		<Route exact path='/' component={Home} />
		  	    		<Route exact path='/global' component={CounterGlobalState} />
		  	    	</Switch>
		  	    </counterContext.Provider>
	  	    </Router>
  	    </Fragment>
  	); 
}
