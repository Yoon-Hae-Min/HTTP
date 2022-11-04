import { Button, Divider, Grid, TextField } from "@mui/material";
import React from "react";

const SettingSubject = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button variant="contained">저장하기</Button>
      </div>
      <Grid container marginBottom="70px" marginTop="5px" spacing={4}>
        <Grid item lg={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="과목명"
            variant="outlined"
          />
        </Grid>
        <Grid item lg={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="팀당 편성 인원"
            variant="outlined"
          />
        </Grid>
        <Grid item lg={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="편성할 팀의 개수"
            variant="outlined"
          />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default SettingSubject;
