import React, { useState, Fragment } from "react";
import HooksMouseToggle from "./HooksMouseToggle";

export default props => {
  const [display, setDisplay] = useState(true);

  return (
    <Fragment>
      <button onClick={() => setDisplay(!display)}>
        Toggle mouse Coordinate display
      </button>
      {display && <HooksMouseToggle />}
    </Fragment>
  );
};
