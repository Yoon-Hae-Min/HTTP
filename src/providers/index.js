import React, { createContext } from "react";
import { useReducer } from "react";
import reducer, { initialState } from "../reducers/reducers";

export const InfoContexts = createContext();

const Providers = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InfoContexts.Provider value={{ ...state, dispatch }}>
      {children}
    </InfoContexts.Provider>
  );
};

export default Providers;
