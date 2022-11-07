import { Button, Divider, Grid, TextField } from "@mui/material";
import produce from "immer";
import React from "react";

const SettingSubject = ({ subjectInfo, setSubjectInfo }) => {
  const onChangeSubject = (event) => {
    setSubjectInfo((pre) => {
      return produce(pre, (draft) => {
        draft[event.target.name] = event.target.value;
      });
    });
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button variant="contained" type="submit">
          저장하기
        </Button>
      </div>
      <Grid container marginBottom="70px" marginTop="5px" spacing={4}>
        <Grid item lg={6}>
          <TextField
            fullWidth
            label="과목명"
            inputProps={{
              name: "name",
            }}
            variant="outlined"
            value={subjectInfo.name}
            onChange={onChangeSubject}
          />
        </Grid>
        <Grid item lg={6}>
          <TextField
            fullWidth
            label="팀당 편성 인원"
            variant="outlined"
            value={subjectInfo.numberOfTeams}
            type="number"
            inputProps={{
              name: "numberOfTeams",
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            onChange={onChangeSubject}
          />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default SettingSubject;
