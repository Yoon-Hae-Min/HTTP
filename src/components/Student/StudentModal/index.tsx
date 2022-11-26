import { Button, Modal, Typography, SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system';
import produce from 'immer';
import React, { useContext, ChangeEvent, SyntheticEvent, useMemo, useCallback } from 'react';
import { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';
import useSubject from '../../../hooks/useSubject';
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
  handleCloseModal: () => void;
  editIndex: number;
}

const StudentModal = ({ open, handleCloseModal, editIndex }: ModalProps) => {
  const { currentSubject, dispatch } = useSubject();
  const [student, setStudent] =
    useState<Pick<Student, 'name' | 'grades' | 'studentId'>>(initialState);

  const onSubmit = {
    Edit: (event: SyntheticEvent) => {
      event.preventDefault();
      const formattedStudent = {
        ...student,
        sumWeight: StudentRating(GradesCombineWeights(student, currentSubject.weights)),
      };
      dispatch({
        type: 'CHANGE_STUDENT',
        index: editIndex - 1,
        student: formattedStudent,
      });
      handleCloseModal();
      console.log('edit');
    },
    Save: (event: SyntheticEvent) => {
      event.preventDefault();
      const formattedStudent = {
        ...student,
        sumWeight: StudentRating(GradesCombineWeights(student, currentSubject.weights)),
      };
      dispatch({ type: 'CREATE_NEW_STUDENT', student: formattedStudent });
      handleCloseModal();
      console.log('save');
    },
  };

  const onClickDelete = useCallback(() => {
    dispatch({
      type: 'DELETE_STUDENT',
      index: editIndex - 1,
    });
    handleCloseModal();
  }, []);

  const onChangeSelect = useCallback((event: SelectChangeEvent<Grade>, index: number) => {
    setStudent((pre) => {
      return produce(pre, (draft) => {
        draft.grades[index] = event.target.value as Grade;
      });
    });
  }, []);

  const onChangeText = useCallback((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setStudent((pre) => {
      return {
        ...pre,
        [event.target.name]: event.target.value,
      };
    });
  }, []);

  useLayoutEffect(() => {
    if (editIndex !== 0) {
      setStudent({ ...currentSubject.students[editIndex - 1] });
    } else {
      setStudent({
        name: '',
        studentId: '',
        grades: Array.from({ length: currentSubject.weights.length }, () => 'B+'),
      });
    }
  }, [editIndex]);
  console.log(student);
  console.log(editIndex);
  return (
    <Modal open={open} onClose={handleCloseModal}>
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
        <form onSubmit={onSubmit[editIndex === 0 ? 'Save' : 'Edit']}>
          <StudentInfo onChangeText={onChangeText} student={student} />
          <SubjectInfo
            student={student}
            currentSubject={currentSubject}
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
