import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";

export default function TeamCard({ index, team }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 20, fontWeight: "bold" }}
          color="text.secondary"
        >
          {index + 1}조
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360 }}>
          {team.map((student) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>{student.name[0]}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={student.name}
                  secondary={student.studentId}
                />
              </ListItem>
            </>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
