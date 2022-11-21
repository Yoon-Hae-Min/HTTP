import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import reducer, {
  initialState,
  initialSynchronization,
} from "../reducers/reducers";

export const InfoContexts = createContext();

const Providers = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSynchronization, setIsSynchronization] = useState(
    initialSynchronization
  );
  useEffect(() => {
    isSynchronization && localStorage.setItem("data", JSON.stringify(state));
  }, [isSynchronization, state]);
  return (
    <InfoContexts.Provider
      value={{ ...state, dispatch, isSynchronization, setIsSynchronization }}
    >
      {children}
    </InfoContexts.Provider>
  );
};

export default Providers;
