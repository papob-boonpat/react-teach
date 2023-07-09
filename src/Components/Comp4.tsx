import React, { useContext } from "react";
import { SampleContext } from "../App";

function Comp4() {
  const { value } = useContext(SampleContext);
  return <div>Comp4: {value}</div>;
}

export default Comp4;
