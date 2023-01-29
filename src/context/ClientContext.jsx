import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer/clientReducer";

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ClientContext.Provider value={{ state, dispatch }}>
      {children}
    </ClientContext.Provider>
  );
};
