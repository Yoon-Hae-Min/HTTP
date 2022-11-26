import React, { HTMLAttributes } from 'react';
import { Box, Typography } from '@mui/material';

interface TabPanelParams extends HTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  value: number;
  index?: number;
}

const TabPanel = (props: TabPanelParams) => {
  const { children, value, index = 1, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
