import React, {Fragment} from "react";
import ReducerDataFetchOne from './Components/ReducerDataFetchOne'
import ReducerDataFetchTwo from './Components/ReducerDataFetchTwo'
import ReducerDataFetchThree from './Components/ReducerDataFetchThree'
import ReducerHooksOne from './Components/ReducerHooksOne'
export default function AppReducer() {
	
  	return (
  	    <Fragment> 
  	    	{/*<ReducerDataFetchOne />*/}
  	    	{/*<ReducerDataFetchTwo />*/}
  	    	{/*<ReducerDataFetchThree />*/} 
  	    	<ReducerHooksOne />
  	    </Fragment>
  	); 
}
