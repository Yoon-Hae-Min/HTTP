import { Button, Snackbar } from '@mui/material';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SettingSubject from '../components/Setting/SettingSubject';
import SettingWeightTable from '../components/Setting/SettingWeightTable';
import useSubject from '../hooks/useSubject';
import useToggleState from '../hooks/useToggleState';
import { InfoContext } from '../providers';
import { Weight } from '../types/common';
import { SubjectInfo } from '../types/Setting';

const Setting = () => {
  const { currentSubject, allSubject, dispatch } = useSubject();

  const [subjectInfo, setSubjectInfo] = useState<SubjectInfo>({
    name: currentSubject.name,
    numberOfTeams: currentSubject.numberOfTeams,
  });
  const [weights, setWeights] = useState<Weight[]>(currentSubject.weights);
  const [deletedIndex, setDeletedIndex] = useState<number[]>([]);

  const [openSnackBar, , toggleSnackBar] = useToggleState(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    dispatch({
      type: 'CHANGE_SETTING',
      subjectInfo: subjectInfo,
      weights: weights,
      deletedIndex: deletedIndex,
    });
    dispatch({ type: 'CALCULATE_STUDENTS_WEIGHTS' });
    toggleSnackBar();
  };

  const onClickDelete = () => {
    if (window.confirm(`해당 과목을 삭제하시겠습니까?`)) {
      dispatch({ type: 'DELETE_SUBJECT' });
    }
  };

  useEffect(() => {
    setSubjectInfo({
      name: currentSubject.name,
      numberOfTeams: currentSubject.numberOfTeams,
    });
    setWeights(currentSubject.weights);
  }, [currentSubject]);

  return (
    <form onSubmit={onSubmit}>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={toggleSnackBar}
        message="저장되었습니다."
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Button variant="contained" type="submit" sx={{ marginRight: '30px' }}>
          저장하기
        </Button>
        {allSubject.length > 1 && (
          <Button variant="contained" color="error" onClick={onClickDelete}>
            과목 삭제하기
          </Button>
        )}
      </div>
      <SettingSubject subjectInfo={subjectInfo} setSubjectInfo={setSubjectInfo} />
      <SettingWeightTable
        weights={weights}
        setWeights={setWeights}
        setDeletedIndex={setDeletedIndex}
      />
    </form>
  );
};

export default Setting;
