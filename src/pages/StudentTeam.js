import { Button, Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import TeamCard from "../components/StudentTeam/TeamCard";
import TeamCardGrid from "../components/StudentTeam/TeamCardGrid";
import { InfoContexts } from "../providers";
import getTeams from "../utils/Grouping";

const StudentTeam = () => {
  const { subjects, selectedSubject, dispatch } = useContext(InfoContexts);

  const onClickMakeTeam = () => {
    const formatData = {
      teamCount: subjects[selectedSubject].numberOfTeams,
      data: JSON.parse(JSON.stringify(subjects[selectedSubject].students)), // 깊은복사를 해야한다 getTeams에서 불변성이 깨지기 때문에 state의 영향을 받아 student값이 지워지는 버그가 있었다.
    };
    const team = new getTeams(formatData);
    const teams = team.getTeams();
    dispatch({ type: "CREATE_NEW_TEAMS", teams: teams });
  };

  return (
    <>
      <TeamCardGrid>
        {subjects[selectedSubject].teams.map((team, index) => (
          <Grid item xs={12} lg={5} margin="30px">
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
