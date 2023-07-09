import React, { useContext } from "react";
import Comp2 from "./Comp2";
import { SampleContext } from "../App";

function Comp1() {
  const { setValue } = useContext(SampleContext);
  return (
    <div>
      Comp1
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Comp2 />
    </div>
  );
}

export default Comp1;
