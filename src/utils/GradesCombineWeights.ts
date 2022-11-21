interface Combined{
  grade:string,
  value:number,
}

const GradesCombineWeights = (student:Student, weights:Weight[]):Combined[] => {
  const gradesAndWeight:Combined[] = [];
  student.grades.map((grade, index) => {
    return gradesAndWeight.push({
      grade: grade,
      value: weights[index].value,
    });
  });
  return gradesAndWeight;
};

export default GradesCombineWeights;
