import React, { createContext, useState, Dispatch } from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import reducer, { initialState, initialSynchronization } from '../reducers/reducers';
import { Actions } from '../types/actions';
import { GlobalState } from '../types/common';

interface Info extends GlobalState {
  dispatch: Dispatch<Actions>;
}

export const InfoContext = createContext<Info>({
  dispatch: () => undefined,
  selectedSubject: 0,
  subjects: [],
});

interface Synchronization {
  isSynchronization: boolean;
  setIsSynchronization: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SynchronizationContext = createContext<Synchronization>({
  isSynchronization: false,
  setIsSynchronization: () => undefined,
});

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSynchronization, setIsSynchronization] = useState<boolean>(initialSynchronization);
  useEffect(() => {
    isSynchronization && localStorage.setItem('data', JSON.stringify(state));
  }, [isSynchronization, state]);
  return (
    <InfoContext.Provider value={{ ...state, dispatch }}>
      <SynchronizationContext.Provider value={{ isSynchronization, setIsSynchronization }}>
        {children}
      </SynchronizationContext.Provider>
    </InfoContext.Provider>
  );
};

export default Providers;
