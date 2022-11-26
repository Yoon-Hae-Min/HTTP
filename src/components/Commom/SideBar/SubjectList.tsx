import React, { memo } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import { Subject } from '../../../types/common';

interface SubjectList {
  subject: Subject;
  onClick: () => void;
}

const SubjectList = ({ subject, onClick }: SubjectList) => {
  return (
    <ListItem key={subject.name} disablePadding onClick={onClick}>
      <ListItemButton>
        <ListItemIcon>
          <GradeIcon />
        </ListItemIcon>
        <ListItemText primary={subject.name} />
      </ListItemButton>
    </ListItem>
  );
};

export default memo(SubjectList);
