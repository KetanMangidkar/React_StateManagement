import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddClick = () => {
    // setCount(count++);
    setCount(count + 1);
  };
  const handleReduceClick = () => {
    setCount(count - 1);
  };
  return (
    <div className="counter_box">
      <h1>Count {count}</h1>
      <div>
        <button onClick={handleReduceClick}>-</button>
        <button onClick={handleAddClick}>+</button>
      </div>
    </div>
  );
};

export default Counter;
