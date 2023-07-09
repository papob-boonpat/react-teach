import React, { useEffect, useRef, useState } from "react";

function Sample() {
  const [show, setShow] = useState(false);
  const count = useRef(0);
  const handleClick = () => {
    count.current += 1;
  };

  useEffect(() => {
    console.log("update");
  });

  return (
    <div>
      Sample <br /> <button onClick={handleClick}>click</button>{" "}
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        Show Count
      </button>
      <br />
      {show ? count.current : null}
    </div>
  );
}

export default Sample;
