import React, { ChangeEventHandler } from 'react';
import { TextField } from '@mui/material';
import { Student } from '../../../types/common';

interface StudentInfoProps {
  onChangeText: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  student: Student;
}

const StudentInfo = ({ onChangeText, student }: StudentInfoProps) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="이름"
        name="name"
        onChange={onChangeText}
        variant="outlined"
        value={student.name ?? ''}
        sx={{ marginTop: '40px' }}
      />
      <TextField
        id="outlined-basic"
        label="학번"
        name="studentId"
        onChange={onChangeText}
        value={student.studentId ?? ''}
        variant="outlined"
        sx={{ marginTop: '40px', marginLeft: '40px' }}
      />
    </>
  );
};

export default StudentInfo;
