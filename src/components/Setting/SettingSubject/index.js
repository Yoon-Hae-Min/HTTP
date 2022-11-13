import { Divider, Grid, TextField } from "@mui/material";
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
            label="생성할 팀의 수"
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
