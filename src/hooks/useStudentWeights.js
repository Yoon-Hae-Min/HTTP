import { useContext } from "react";
import { InfoContexts } from "../providers";

const useStudentWeights = (student) => {
  const { subjects, selectedSubject } = useContext(InfoContexts);
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
