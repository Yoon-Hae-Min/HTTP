import { Student } from '../types/common';
import useSubject from './useSubject';

const useStudentWeights = (student: Student) => {
  const { currentSubject } = useSubject();

  const weights = currentSubject.weights;
  const studentWeight = [
    ...weights.map((weight, index) => ({
      ...weight,
      grade: student.grades[index],
    })),
  ];
  return studentWeight;
};

export default useStudentWeights;
