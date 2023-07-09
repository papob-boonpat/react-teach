import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Comp1 from "./Components/Comp1";

type Sample = {
  value: string;
  setValue: (value: string) => void;
};
export const SampleContext = createContext<Sample>(null!);
function App() {
  const [value, setValue] = useState("");

  return (
    <SampleContext.Provider value={{ value, setValue }}>
      <div className="App">
        <Comp1 />
      </div>
    </SampleContext.Provider>
  );
}

export default App;
