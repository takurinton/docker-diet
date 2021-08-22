import React, { useState } from "react"

export const Takurinton = () => {
const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>increment</button>
      <button onClick={() => setCount(count-1)}>decrement</button>
    </>
  );
}