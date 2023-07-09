import { ReactNode, createContext, useContext, useState } from "react";

type Sample = {
  value: string;
  setValue: (value: string) => void;
};
const SampleContext = createContext<Sample>(null!);

export const SampleProvider = (props: { children: ReactNode }) => {
  const [value, setValue] = useState("");
  return (
    <SampleContext.Provider value={{ value, setValue }}>
      {props.children}
    </SampleContext.Provider>
  );
};

export const useSample = () => useContext(SampleContext);
