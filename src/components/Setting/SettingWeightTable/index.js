import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Input, Typography } from "@mui/material";
import SettingWeightTableInput from "../SettingWeightTableInput";
import { width } from "@mui/system";

export default function SettingWeightTable() {
  return (
    <Box sx={{ width: "100%" }}>
      <List>
        <ListItem>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              width: "100%",
              margin: "10px",
            }}
            color="text.secondary"
          >
            가중치 명
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              width: "100%",
              margin: "10px",
            }}
            color="text.secondary"
          >
            가중치 비율(%)
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <SettingWeightTableInput placeholder="가중치 명을 입력하세요" />
          <SettingWeightTableInput placeholder="가중치 비율을 입력하세요" />
        </ListItem>
        <Divider />
        <ListItem>
          <SettingWeightTableInput placeholder="가중치 명을 입력하세요" />
          <SettingWeightTableInput placeholder="가중치 비율을 입력하세요" />
        </ListItem>
      </List>
    </Box>
  );
}
