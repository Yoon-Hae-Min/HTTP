import { Divider, Grid, TextField } from '@mui/material';
import React, { SetStateAction, Dispatch, ChangeEvent, memo, useCallback } from 'react';
import { SubjectInfo } from '../../../types/Setting';

const SettingSubject = ({
  subjectInfo,
  setSubjectInfo,
}: {
  subjectInfo: SubjectInfo;
  setSubjectInfo: Dispatch<SetStateAction<SubjectInfo>>;
}) => {
  const onChangeSubject = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setSubjectInfo((pre) => {
        return {
          ...pre,
          [event.target.name as keyof SubjectInfo]: event.target.value,
        };
      });
    },
    []
  );

  return (
    <>
      <Grid container marginBottom="70px" marginTop="5px" spacing={4}>
        <Grid item lg={6}>
          <TextField
            fullWidth
            label="과목명"
            inputProps={{
              name: 'name',
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
              name: 'numberOfTeams',
              inputMode: 'numeric',
              pattern: '[0-9]*',
            }}
            onChange={onChangeSubject}
          />
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default memo(SettingSubject);
