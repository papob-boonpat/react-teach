import React, { useRef, useState } from "react";

function Sample() {
  const inputRef = useRef<HTMLInputElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    alert(inputRef.current?.value);
  };

  return (
    <div>
      Sample <br />
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Alert</button>
      <div
        ref={boxRef}
        style={{
          backgroundColor: "blue",
          height: Math.random() * 300,
          width: Math.random() * 1000,
        }}
      ></div>
      <br />
      <button
        onClick={() => {
          console.log("height", boxRef.current?.clientHeight);
          console.log("width", boxRef.current?.clientWidth);
        }}
      >
        getSize
      </button>
    </div>
  );
}

export default Sample;
