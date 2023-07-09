import React, { useEffect, useState } from "react";

function Sample() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log(counter);
    return () => {
      console.log("cleanup");
    };
  }, [counter]);

  return (
    <div>
      Count : {counter}
      <br />
      <button
        onClick={() => {
          setCounter((prev) => --prev);
        }}
      >
        -
      </button>{" "}
      <button
        onClick={() => {
          setCounter((prev) => ++prev);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Sample;
