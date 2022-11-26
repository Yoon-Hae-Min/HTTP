import React from 'react';
import {
  AppBar,
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from '../SideBar';
import { useCallback } from 'react';
import useSynchronization from '../../../hooks/useSynchronization';
import useToggleState from '../../../hooks/useToggleState';

const Navigation = () => {
  const { isSynchronization, setSynchronize, setUnSynchronize } = useSynchronization();
  const [open, , toggleDrawer] = useToggleState();
  const toggleSync = useCallback(() => {
    isSynchronization ? setUnSynchronize() : setSynchronize();
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            HTTP
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={isSynchronization}
                onChange={toggleSync}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="동기화 사용"
          />
        </Toolbar>
      </AppBar>
      <SideBar open={open} handleDrawerClose={toggleDrawer} />
    </Box>
  );
};

export default Navigation;
