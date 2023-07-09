import React, { useEffect } from "react";

function Sample() {
  useEffect(() => {
    console.log("mounted");

    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>Sample</div>;
}

export default Sample;
