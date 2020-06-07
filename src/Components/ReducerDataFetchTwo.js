import React, {Fragment, useState, useEffect } from "react";

export default props => {  
  const initialData = {
    loading: true,
    error: false,
    post: {}
  }
  const [data, setData] = useState(initialData)
  useEffect(() => {
    async function dataLoad (){
      try{
        let post  = await fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json())
        setData(previousData => {
          let resultingPost = {...previousData, loading: false, post: post}
          return resultingPost
        })
      }catch(error){
        setData(previousData => {
          let resultingPost = {...previousData, error: true, loading: false}
          return resultingPost
        })
      }
      
    }
    dataLoad()
    
  }, [])
  const {loading, error, post} = data
  return (
    <Fragment>
      <h1>Data fetching using useState and useEffects</h1>
      {loading ? <h3>Loading</h3> : <h2>{post.title}</h2>}
      {error && <em>There are some error</em>}
    </Fragment>
  );
};

