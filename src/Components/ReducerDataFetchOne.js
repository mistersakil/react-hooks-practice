import React, {Fragment, useState, useEffect } from "react";

export default props => {  
  const initialPost = {}
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [post, setPost] = useState(initialPost)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setLoading(false)
      setError(false)
      setPost(response)
    })
    .catch(error => {
      console.log(error)
      setError(true)
      setLoading(false)
      setPost(initialPost)

    })
  }, [])
  return (
    <Fragment>
      <h1>Data fetching using useState and useEffect</h1>
      {loading ? <h3>Loading</h3> : <h2>{post.title}</h2>}
      {error && <em>There are some error</em>}
    </Fragment>
  );
};

