import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import produce from "immer";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { InfoContexts } from "../../../providers";
import GradesCombineWeights from "../../../utils/GradesCombineWeights";
import StudentRating from "../../../utils/StudentRating";
import StudentInfo from "./StudentInfo";
import SubjectInfo from "./SubjectInfo";

const StudentModal = ({ open, handleClose, editIndex }) => {
  const { subjects, selectedSubject, dispatch } = useContext(InfoContexts);
  const [student, setStudent] = useState({
    name: "",
    id: "",
    grades: [],
  });
  const [isEdit, setIsEdit] = useState(false);

  const onSubmitEdit = (isEdit) => {
    if (isEdit) {
      return (event) => {
        event.preventDefault();
        const formattedStudent = {
          ...student,
          sumWeight: StudentRating(
            GradesCombineWeights(student, subjects[selectedSubject].weights)
          ),
        };
        dispatch({
          type: "CHANGE_STUDENT",
          index: editIndex - 1,
          student: formattedStudent,
        });
        handleClose();
      };
    } else {
      return (event) => {
        event.preventDefault();
        const formattedStudent = {
          ...student,
          sumWeight: StudentRating(
            GradesCombineWeights(student, subjects[selectedSubject].weights)
          ),
        };
        dispatch({ type: "CREATE_NEW_STUDENT", student: formattedStudent });
        handleClose();
      };
    }
  };

  const onChangeSelect = (event, index) => {
    setStudent((pre) => {
      return produce(pre, (draft) => {
        draft.grades[index] = event.target.value;
      });
    });
  };

  const onChangeText = (event) => {
    setStudent((pre) => {
      return produce(pre, (draft) => {
        draft[event.target.name] = event.target.value;
      });
    });
  };

  const onSubmit = onSubmitEdit(isEdit);

  useEffect(() => {
    if (editIndex) {
      setStudent({ ...subjects[selectedSubject].students[editIndex - 1] });
      setIsEdit(true);
    }
  }, [editIndex, selectedSubject, subjects]);
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        width="800px"
        sx={{
          backgroundColor: "white",
          display: "block",
          left: "50%",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%,-50%)",
          padding: "50px",
        }}
      >
        <Typography id="modal-modal-title" variant="h4" component="h2">
          학생추가
        </Typography>
        <form onSubmit={onSubmit}>
          <StudentInfo onChangeText={onChangeText} student={student} />
          <SubjectInfo
            student={student}
            currentSubject={subjects[selectedSubject]}
            onChangeSelect={onChangeSelect}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ justifyContent: "center" }}
          >
            저장하기
          </Button>
          <Button
            variant="contained"
            type="button"
            color="error"
            sx={{ justifyContent: "center" }}
          >
            삭제하기
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default StudentModal;
