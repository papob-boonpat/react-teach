import React, { useContext } from "react";
import { useSample } from "../libs/useSample";

function Comp4() {
  const { value } = useSample();
  return <div>Comp4: {value}</div>;
}

export default Comp4;
