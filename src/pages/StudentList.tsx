import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import StudentModal from '../components/Student/StudentModal';
import StudentTable from '../components/Student/StudentTable';
import { InfoContext } from '../providers';
import AddIcon from '@mui/icons-material/Add';
import useToggleState from '../hooks/useToggleState';

const StudentList = () => {
  const { subjects, selectedSubject } = useContext(InfoContext);
  const [open, , toggleModal] = useToggleState();
  const [editIndex, setEditIndex] = useState<number>(0);

  return (
    <>
      <StudentModal open={open} handleClose={toggleModal} editIndex={editIndex} />
      <StudentTable
        studentData={subjects[selectedSubject].students}
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
