import { createContext, useState } from "react";

const initialState = {
  hue: 25,
  lastScrollPos: 0,
};

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;