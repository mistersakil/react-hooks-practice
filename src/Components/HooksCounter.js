import React, { useState, useEffect, Fragment } from "react";
export default props => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("effect hook called");
    document.title = "Clicked " + counter + " times";
  }, [counter]);
  return (
    <Fragment>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCounter(counter + 1)}>
        Clicked {counter} times
      </button>
    </Fragment>
  );
};
