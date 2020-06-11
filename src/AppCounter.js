import React, {Fragment} from "react";
import CounterOne from './Components/CounterOne.js'
export default function AppCounter() {
	
  	return (
  	    <Fragment> 	
  	    	<CounterOne initialCount={0}/>
  	    </Fragment>
  	); 
}
