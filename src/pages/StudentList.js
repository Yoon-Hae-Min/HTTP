import { Fab } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import StudentModal from "../components/Student/StudentModal";
import StudentTable from "../components/Student/StudentTable";
import { InfoContexts } from "../providers";
import AddIcon from "@mui/icons-material/Add";
import useToggleState from "../hooks/useToggleState";
import produce from "immer";

const StudentList = () => {
  const { subjects, selectedSubject } = useContext(InfoContexts);
  const [open, , toggleModal] = useToggleState();
  const [edit, setEdit] = useState({
    index: 0,
    isEdit: false,
  });

  useEffect(() => {
    if (!open) {
      setEdit((pre) => {
        return produce(pre, (draft) => {
          draft.isEdit = false;
        });
      });
    }
  }, [open]);

  return (
    <>
      <StudentModal open={open} handleClose={toggleModal} edit={edit} />
      <StudentTable
        studentData={subjects[selectedSubject].students}
        setEdit={setEdit}
        toggleModal={toggleModal}
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
