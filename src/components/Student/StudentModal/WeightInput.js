import { Divider, ListItem, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const WeightInput = ({ weight, value, onChange }) => {
  return (
    <>
      <ListItem>
        <Typography
          sx={{
            fontSize: 12,
            width: "50%",
            fontWeight: "bold",
            margin: "5px",
          }}
          color="text.secondary"
        >
          {weight.name}
        </Typography>

        <Select
          id="demo-simple-select-filled"
          value={value}
          onChange={onChange}
        >
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
