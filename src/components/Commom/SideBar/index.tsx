import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import useSubject from '../../../hooks/useSubject';
import SubjectList from './SubjectList';

const drawerWidth = 240;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 18px;
`;

interface Props {
  open: boolean;
  handleDrawerClose: () => void;
}

const SideBar = ({ open, handleDrawerClose }: Props) => {
  const { allSubject, dispatch } = useSubject();

  const onClickSubject = useCallback((index: number) => {
    dispatch({ type: 'CHANGE_SUBJECT', subject: index });
    handleDrawerClose();
  }, []);

  const onClickAddSubject = useCallback(() => {
    dispatch({ type: 'CREATE_NEW_SUBJECT' });
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <ListItemText primary="과목명" />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {allSubject.map((subject, index) => (
            <SubjectList
              subject={subject}
              key={subject.name}
              onClick={() => onClickSubject(index)}
            />
          ))}
          <ListItem style={{ justifyContent: 'center' }}>
            <ListItemIcon>
              <ListItemButton onClick={onClickAddSubject}>
                <AddIcon />
              </ListItemButton>
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
