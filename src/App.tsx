import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Comp1 from "./Components/Comp1";
import { SampleProvider } from "./libs/useSample";

function App() {
  return (
    <SampleProvider>
      <div className="App">
        <Comp1 />
      </div>
    </SampleProvider>
  );
}

export default App;
