import { Grid } from "@mui/material";
import React from "react";

const TeamCardGrid = ({ children }) => {
  return (
    <Grid container>
      {children.map((child) => (
        <Grid item xs={12} lg={5} margin="30px">
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamCardGrid;
