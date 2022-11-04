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
  const { subjectNames, setInfo } = useContext(InfoContexts);
  const onClickSubject = (text) => {
    setInfo((pre) => ({ ...pre, selectedSubject: text }));
    handleDrawerClose();
  };

  const onClickAddSubject = () => {
    setInfo((pre) => ({
      ...pre,
      subjectNames: [...pre.subjectNames, "과목명"],
      selectedSubject: "과목명",
    }));
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
          {subjectNames.map((text) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => onClickSubject(text)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <GradeIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
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
