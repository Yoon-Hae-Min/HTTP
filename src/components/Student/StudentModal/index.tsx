import { Button, Modal, Typography, SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system';
import produce from 'immer';
import React, { useContext, ChangeEvent, SyntheticEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { InfoContext } from '../../../providers';
import { Student } from '../../../types/common';
import { EditStudent, Grade } from '../../../types/StudentList';
import GradesCombineWeights from '../../../utils/GradesCombineWeights';
import StudentRating from '../../../utils/StudentRating';
import StudentInfo from './StudentInfo';
import SubjectInfo from './SubjectInfo';

const initialState = {
  name: '',
  studentId: '',
  grades: [],
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
  editIndex: number;
}

const StudentModal = ({ open, handleClose, editIndex }: ModalProps) => {
  const { subjects, selectedSubject, dispatch } = useContext(InfoContext);
  const [student, setStudent] =
    useState<Pick<Student, 'name' | 'grades' | 'studentId'>>(initialState);

  const onSubmit = {
    Edit: (event: SyntheticEvent) => {
      event.preventDefault();
      const formattedStudent = {
        ...student,
        sumWeight: StudentRating(GradesCombineWeights(student, subjects[selectedSubject].weights)),
      };
      dispatch({
        type: 'CHANGE_STUDENT',
        index: editIndex - 1,
        student: formattedStudent,
      });
      handleClose();
    },
    Save: (event: SyntheticEvent) => {
      event.preventDefault();
      const formattedStudent = {
        ...student,
        sumWeight: StudentRating(GradesCombineWeights(student, subjects[selectedSubject].weights)),
      };
      dispatch({ type: 'CREATE_NEW_STUDENT', student: formattedStudent });
      handleClose();
    },
  };

  const onClickDelete = () => {
    dispatch({
      type: 'DELETE_STUDENT',
      index: editIndex - 1,
    });
    handleClose();
  };

  const onChangeSelect = (event: SelectChangeEvent<Grade>, index: number) => {
    setStudent((pre) => {
      return produce(pre, (draft) => {
        draft.grades[index] = event.target.value as Grade;
      });
    });
  };

  const onChangeText = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setStudent((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value,
      };
    });
  };

  useEffect(() => {
    if (editIndex !== 0) {
      setStudent({ ...subjects[selectedSubject].students[editIndex - 1] });
      return setStudent({ name: '', grades: [], studentId: '' });
    } else {
      setStudent({
        name: '',
        studentId: '',
        grades: Array.from({ length: subjects[selectedSubject].weights.length }, () => 'B+'),
      });
    }
  }, [editIndex, selectedSubject, subjects]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        width="800px"
        sx={{
          backgroundColor: 'white',
          display: 'block',
          left: '50%',
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          padding: '50px',
        }}
      >
        <Typography id="modal-modal-title" variant="h4" component="h2">
          학생추가
        </Typography>
        <form onSubmit={onSubmit[editIndex === 0 ? 'Edit' : 'Save']}>
          <StudentInfo onChangeText={onChangeText} student={student} />
          <SubjectInfo
            student={student}
            currentSubject={subjects[selectedSubject]}
            onChangeSelect={onChangeSelect}
          />
          <Button
            variant="contained"
            type="submit"
            sx={{ justifyContent: 'center', marginRight: '30px' }}
          >
            저장하기
          </Button>
          {editIndex !== 0 && (
            <Button
              variant="contained"
              type="button"
              color="error"
              sx={{ justifyContent: 'center' }}
              onClick={onClickDelete}
            >
              삭제하기
            </Button>
          )}
        </form>
      </Box>
    </Modal>
  );
};
export default StudentModal;
