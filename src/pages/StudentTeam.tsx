import { Button, Grid } from '@mui/material';
import React, { useContext } from 'react';
import TeamCard from '../components/StudentTeam/TeamCard';
import TeamCardGrid from '../components/StudentTeam/TeamCardGrid';
import { InfoContext } from '../providers';
import { Team } from '../types/common';
import Grouping from '../utils/Grouping';

const StudentTeam = () => {
  const { subjects, selectedSubject, dispatch } = useContext(InfoContext);

  const onClickMakeTeam = () => {
    if (subjects[selectedSubject].numberOfTeams > subjects[selectedSubject].students.length) {
      alert('학생 수 보다 편성인원이 많습니다.');
      return;
    }
    const formatData = {
      teamCount: subjects[selectedSubject].numberOfTeams,
      data: JSON.parse(JSON.stringify(subjects[selectedSubject].students)), // 깊은복사를 해야한다 getTeams에서 불변성이 깨지기 때문에 state의 영향을 받아 student값이 지워지는 버그가 있었다.
    };
    const team = new Grouping(formatData);
    const teams: any = team.getTeams().map((team: any) => {
      return {
        members: team[1],
        sumWeight: team[0],
      };
    });
    dispatch({ type: 'CREATE_NEW_TEAMS', teams: teams });
  };
  console.log(subjects[selectedSubject].teams);
  return (
    <>
      <TeamCardGrid>
        {subjects[selectedSubject].teams.map((team, index) => (
          <Grid item xs={12} lg={5} margin="30px" key={index}>
            <TeamCard index={index} team={team} />
          </Grid>
        ))}
      </TeamCardGrid>
      <Button variant="contained" onClick={onClickMakeTeam}>
        팀 편성하기
      </Button>
    </>
  );
};

export default StudentTeam;
