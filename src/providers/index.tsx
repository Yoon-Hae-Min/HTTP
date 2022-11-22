import React, { createContext, useState, Dispatch } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import reducer, { initialState, initialSynchronization } from '../reducers/reducers';
import { Actions } from '../types/actions';
import { GlobalState } from '../types/common';

interface Context extends GlobalState {
  dispatch: Dispatch<Actions>;
  isSynchronization: boolean;
  setIsSynchronization: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InfoContext = createContext<Context | null>(null);

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSynchronization, setIsSynchronization] = useState<boolean>(initialSynchronization);
  useEffect(() => {
    isSynchronization && localStorage.setItem('data', JSON.stringify(state));
  }, [isSynchronization, state]);
  return (
    <InfoContext.Provider value={{ ...state, dispatch, isSynchronization, setIsSynchronization }}>
      {children}
    </InfoContext.Provider>
  );
};

export default Providers;
