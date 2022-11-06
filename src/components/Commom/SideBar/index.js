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
} from "@mui/material";
import React, { useContext } from "react";
import styled from "styled-components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GradeIcon from "@mui/icons-material/Grade";
import { InfoContexts } from "../../../providers";
import AddIcon from "@mui/icons-material/Add";

const drawerWidth = 240;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 18px;
`;

const SideBar = ({ open, handleDrawerClose }) => {
  const { subjects, dispatch } = useContext(InfoContexts);

  const onClickSubject = (index) => {
    dispatch({ type: "CHANGE_SUBJECT", subject: index });
    handleDrawerClose();
  };

  const onClickAddSubject = () => {
    dispatch({ type: "CREATE_NEW_SUBJECT" });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
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
          {subjects.map((subject, index) => (
            <ListItem
              key={subject.name}
              disablePadding
              onClick={() => onClickSubject(index)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GradeIcon />
                </ListItemIcon>
                <ListItemText primary={subject.name} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem style={{ justifyContent: "center" }}>
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
