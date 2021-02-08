import React, { createContext, useContext } from "react";

const Context = createContext();

export function DrizzleProvider({ drizzle, children }) {
  return <Context.Provider value={drizzle}>{children}</Context.Provider>;
}

export function useDrizzleContext() {
  const context = useContext(Context);
  return context;
}
