import React, { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const timer = () => {
    setCount(prevCount => prevCount + 1);
  };
  useEffect(() => {
    console.log('effect called ')
    setInterval(timer, 1000);
  }, []);

  return <p>{count}</p>;
};
