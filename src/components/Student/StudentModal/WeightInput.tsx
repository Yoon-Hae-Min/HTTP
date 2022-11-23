import { Divider, ListItem, MenuItem, Select, Typography, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { Weight } from '../../../types/common';
import { Grade } from '../../../types/StudentList';

interface WeightInputProps {
  weight: Weight;
  value: Grade;
  onChange: (event: SelectChangeEvent<Grade>) => void;
}

const WeightInput = ({ weight, value, onChange }: WeightInputProps) => {
  return (
    <>
      <ListItem>
        <Typography
          sx={{
            fontSize: 12,
            width: '50%',
            fontWeight: 'bold',
            margin: '5px',
          }}
          color="text.secondary"
        >
          {weight.name}
        </Typography>

        <Select id="demo-simple-select-filled" value={value} onChange={onChange}>
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="C+">C+</MenuItem>
          <MenuItem value="C">C</MenuItem>
          <MenuItem value="D+">D+</MenuItem>
          <MenuItem value="D">D</MenuItem>
          <MenuItem value="F">F</MenuItem>
        </Select>
      </ListItem>
      <Divider />
    </>
  );
};

export default WeightInput;
