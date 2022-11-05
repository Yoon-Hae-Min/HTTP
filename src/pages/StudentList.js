import { Fab } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import StudentModal from "../components/Student/StudentModal";
import StudentTable from "../components/Student/StudentTable";
import { InfoContexts } from "../providers";
import AddIcon from "@mui/icons-material/Add";

const StudentList = () => {
  const { subjects, selectedSubject } = useContext(InfoContexts);
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((pre) => !pre);
  };
  return (
    <>
      <StudentModal open={open} handleClose={toggleModal} />
      <StudentTable
        studentData={subjects[selectedSubject].students}
        weightData={subjects[selectedSubject].weights}
      />
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", right: 50, bottom: 50 }}
        onClick={toggleModal}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default StudentList;
