const GradesCombineWeights = (student, weights) => {
  const gradesAndWeight = [];
  student.grades.map((grade, index) => {
    return gradesAndWeight.push({
      grade: grade,
      value: weights[index].value,
    });
  });
  return gradesAndWeight;
};

export default GradesCombineWeights;
