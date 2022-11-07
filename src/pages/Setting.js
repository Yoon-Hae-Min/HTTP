import { Alert, Popover, Snackbar } from "@mui/material";
import produce from "immer";
import React, { useContext } from "react";
import { useState } from "react";
import SettingSubject from "../components/Setting/SettingSubject";
import SettingWeightTable from "../components/Setting/SettingWeightTable";
import useToggleState from "../hooks/useToggleState";
import { InfoContexts } from "../providers";

const Setting = () => {
  const { selectedSubject, subjects, dispatch } = useContext(InfoContexts);

  const [subjectInfo, setSubjectInfo] = useState({
    name: subjects[selectedSubject].name,
    numberOfTeams: subjects[selectedSubject].numberOfTeams,
  });
  const [weights, setWeights] = useState(subjects[selectedSubject].weights);

  const [openSnackBar, , toggleSnackBar] = useToggleState();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "CHANGE_SETTING",
      subjectInfo: subjectInfo,
      weights: weights,
    });
    dispatch({ type: "CALCULATE_STUDENTS_WEIGHTS" });
    toggleSnackBar();
  };

  return (
    <form onSubmit={onSubmit}>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={5000}
        onClose={toggleSnackBar}
        message="저장되었습니다."
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      <SettingSubject
        subjectInfo={subjectInfo}
        setSubjectInfo={setSubjectInfo}
      />
      <SettingWeightTable weights={weights} setWeights={setWeights} />
    </form>
  );
};

export default Setting;
