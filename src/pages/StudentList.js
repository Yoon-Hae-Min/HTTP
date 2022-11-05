import React from "react";
import { useContext } from "react";
import StudentTable from "../components/Student/StudentTable";
import { InfoContexts } from "../providers";

const StudentList = () => {
  const { subjects, selectedSubject } = useContext(InfoContexts);
  return (
    <StudentTable
      studentData={subjects[selectedSubject].students}
      weightData={subjects[selectedSubject].weights}
    />
  );
};

export default StudentList;
