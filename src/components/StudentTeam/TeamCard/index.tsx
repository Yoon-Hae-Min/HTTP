import React, { memo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Card, CardContent, Grid } from '@mui/material';
import { Team } from '../../../types/common';

interface TeamCardProps {
  index: number;
  team: Team;
}

const TeamCard = ({ index, team }: TeamCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20, fontWeight: 'bold' }} color="text.secondary">
          {index + 1}조 ({Math.floor(team.sumWeight)})
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360 }}>
          {team.members.map((student) => {
            return (
              <Grid container spacing={2} key={student.studentId}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar>{student.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${student.name} (${Math.floor(student.sumWeight ?? 0)})`}
                    secondary={student.studentId}
                  />
                </ListItem>
              </Grid>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default memo(TeamCard);
