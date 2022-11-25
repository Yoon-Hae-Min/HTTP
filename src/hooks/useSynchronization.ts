import { useContext } from 'react';
import { InfoContext, SynchronizationContext } from '../providers';

const useSynchronization = () => {
  const { isSynchronization, setIsSynchronization } = useContext(SynchronizationContext);

  const setSynchronize = () => {
    setIsSynchronization(true);
    localStorage.setItem('isSynchronization', 'true');
  };
  const setUnSynchronize = () => {
    setIsSynchronization(false);
    localStorage.removeItem('data');
    localStorage.setItem('isSynchronization', 'false');
  };

  return {
    isSynchronization,
    setSynchronize,
    setUnSynchronize,
  };
};

export default useSynchronization;
