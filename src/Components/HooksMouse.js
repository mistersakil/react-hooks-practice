import React, { useState, useEffect, Fragment } from "react";
export default props => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("effect hook called");
    window.addEventListener("mousemove", mouseMoveHandler);
  }, []);
  const mouseMoveHandler = event => {
    console.log("Mousemove event");
    setX(event.clientX);
    setY(event.clientY);
  };
  return (
    <Fragment>
      <p>
        Coordinate X: {x} and Y: {y}
      </p>
    </Fragment>
  );
};
