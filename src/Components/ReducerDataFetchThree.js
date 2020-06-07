import React, {Fragment, useReducer, useEffect } from "react";

export default props => {  
  const initialData = {
    loading: true,
    error: false,
    post: {}
  }
  const reducer = (currentState, action) => {
    switch(action.type){
      case 'SUCCESS'  :
        return {...currentState, loading: false, post: action.payload}
      case 'FAILED'   :
        return {...currentState, loading: false, error: true}
      default:
        return currentState
    }
  }
  const [data, dispatch] = useReducer(reducer, initialData)
  
  useEffect(() => {
    async function loadData(){
      try{
        let post = await fetch('https://jsonplaceholder.typicode.com3/posts/3').then(response => response.json())
        dispatch({type: 'SUCCESS', payload: post})
      }catch(error){
        dispatch({type: 'FAILED'})        
      }
    }
    loadData()
    
    
  }, [])
  const {loading, error, post} = data
  return (
    <Fragment>
      <h1>Data fetching using useState and useEffects</h1>
      {loading ? <h3>Loading</h3> : <h2>{post.title}</h2>}
      {error && <strong>There are some error !!!</strong>}
    </Fragment>
  );
};

