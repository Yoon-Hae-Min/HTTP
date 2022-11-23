import { Grid } from '@mui/material';
import React, { ReactNode } from 'react';

interface TeamCardGridProps {
  children: ReactNode;
}

const TeamCardGrid = ({ children }: TeamCardGridProps) => {
  return <Grid container>{children}</Grid>;
};

export default TeamCardGrid;
