import { useContext } from 'react';
import { InfoContext } from '../providers';
import { Student } from '../types/common';

const useStudentWeights = (student: Student) => {
  const { subjects, selectedSubject } = useContext(InfoContext);
  const weights = subjects[selectedSubject].weights;
  const studentWeight = [
    ...weights.map((weight, index) => ({
      ...weight,
      grade: student.grades[index],
    })),
  ];
  return studentWeight;
};

export default useStudentWeights;
