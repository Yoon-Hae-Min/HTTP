const GradesCombineWeights = (
  student: Student,
  weights: Weight[]
): CombinedWeight[] => {
  const gradesAndWeight: CombinedWeight[] = [];
  student.grades.map((grade, index) => {
    return gradesAndWeight.push({
      grade: grade,
      value: weights[index].value,
    });
  });
  return gradesAndWeight;
};

export default GradesCombineWeights;
