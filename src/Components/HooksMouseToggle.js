import React, { useState, useEffect, Fragment } from "react";

export default props => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const mouseMoveHandler = event => {
    console.log("Mouse move event");
    setX(event.clientX);
    setY(event.clientY);
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      console.log("component unmount code");
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <Fragment>
      <p>
        Coordinate X: {x} and Y: {y}
      </p>
    </Fragment>
  );
};
