import { useContext } from 'react';
import { InfoContext } from '../providers';

const useSubject = () => {
  const { subjects, selectedSubject, dispatch } = useContext(InfoContext);

  return {
    currentSubject: subjects[selectedSubject],
    currentIndex: selectedSubject,
    allSubject: subjects,
    dispatch,
  };
};

export default useSubject;
