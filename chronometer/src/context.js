import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const start = () => {};
  const stop = () => {};
  const reset = () => {};
  return (
    <AppContext.Provider value={{ time, setTime, start, stop, reset }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
