import React, { useContext } from "react";
import Comp2 from "./Comp2";
import { useSample } from "../libs/useSample";

function Comp1() {
  const { setValue } = useSample();
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
