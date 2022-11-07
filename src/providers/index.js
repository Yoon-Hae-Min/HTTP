import React, { createContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import reducer, { initialState } from "../reducers/reducers";

export const InfoContexts = createContext();

const Providers = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);
  return (
    <InfoContexts.Provider value={{ ...state, dispatch }}>
      {children}
    </InfoContexts.Provider>
  );
};

export default Providers;
