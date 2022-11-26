import { Fab } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react';
import { useContext } from 'react';
import StudentModal from '../components/Student/StudentModal';
import StudentTable from '../components/Student/StudentTable';
import { InfoContext } from '../providers';
import AddIcon from '@mui/icons-material/Add';
import useToggleState from '../hooks/useToggleState';
import useSubject from '../hooks/useSubject';

const StudentList = () => {
  const { currentSubject } = useSubject();
  const [open, , toggleModal] = useToggleState();
  const [editIndex, setEditIndex] = useState<number>(0);

  const handleCloseModal = useCallback(() => {
    toggleModal();
    setEditIndex(0);
  }, []);

  return (
    <>
      <StudentModal open={open} handleCloseModal={handleCloseModal} editIndex={editIndex} />
      <StudentTable
        studentData={currentSubject.students}
        setEditIndex={setEditIndex}
        toggleModal={toggleModal}
      />
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', right: 50, bottom: 50 }}
        onClick={toggleModal}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default StudentList;
