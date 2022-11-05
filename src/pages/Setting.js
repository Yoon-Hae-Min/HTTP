import produce from "immer";
import React, { useContext } from "react";
import { useState } from "react";
import SettingSubject from "../components/Setting/SettingSubject";
import SettingWeightTable from "../components/Setting/SettingWeightTable";
import { InfoContexts } from "../providers";

const Setting = () => {
  const { selectedSubject, subjects, setInfo } = useContext(InfoContexts);

  const [subjectInfo, setSubjectInfo] = useState({
    name: subjects[selectedSubject].name,
    numberOfTeams: subjects[selectedSubject].numberOfTeams,
    numberOfPeoplePerTeam: subjects[selectedSubject].numberOfPeoplePerTeam,
  });
  const [weights, setWeights] = useState(subjects[selectedSubject].weights);

  const onSubmit = (event) => {
    event.preventDefault();
    setInfo((pre) => {
      return produce(pre, (draft) => {
        draft.subjects[pre.selectedSubject].name = subjectInfo.name;
        draft.subjects[draft.selectedSubject].numberOfTeams =
          subjectInfo.numberOfTeams;
        draft.subjects[draft.selectedSubject].numberOfPeoplePerTeam =
          subjectInfo.numberOfPeoplePerTeam;
        draft.subjects[draft.selectedSubject].weights = weights;
      });
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <SettingSubject
        subjectInfo={subjectInfo}
        setSubjectInfo={setSubjectInfo}
      />
      <SettingWeightTable weights={weights} setWeights={setWeights} />
    </form>
  );
};

export default Setting;
