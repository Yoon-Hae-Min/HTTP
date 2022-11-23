import React from 'react';
import { Divider, List, ListItem, Typography, SelectChangeEvent } from '@mui/material';
import WeightInput from './WeightInput';
import { Student, Subject } from '../../../types/common';
import { Grade } from '../../../types/StudentList';

interface SubjectInfoProps {
  student: Student;
  currentSubject: Subject;
  onChangeSelect: (event: SelectChangeEvent<Grade>, index: number) => void;
}

const SubjectInfo = ({ student, currentSubject, onChangeSelect }: SubjectInfoProps) => {
  return (
    <List>
      <ListItem>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 'bold',
            width: '100%',
            margin: '10px',
          }}
          color="text.secondary"
        >
          과목
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 'bold',
            width: '100%',
            margin: '10px',
            float: 'right',
          }}
          color="text.secondary"
        >
          성적
        </Typography>
      </ListItem>
      <Divider />
      {currentSubject.weights.map((weight, index) => {
        return (
          <WeightInput
            key={index}
            weight={weight}
            value={student.grades[index] ?? 'B+'}
            onChange={(event) => onChangeSelect(event, index)}
          />
        );
      })}
    </List>
  );
};

export default SubjectInfo;
