import produce from "immer";
import GradesCombineWeights from "../utils/GradesCombineWeights";
import StudentRating from "../utils/StudentRating";

export const initialState = JSON.parse(localStorage.getItem("data"));

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_NEW_STUDENT":
      return produce(state, (draft) => {
        draft.subjects[draft.selectedSubject].students.push(action.student);
      });
    case "CHANGE_STUDENT":
      return produce(state, (draft) => {
        draft.subjects[draft.selectedSubject].students[action.index] =
          action.student;
      });
    case "DELETE_STUDENT":
      return produce(state, (draft) => {
        draft.subjects[draft.selectedSubject].students.splice(action.index, 1);
      });
    case "CREATE_NEW_SUBJECT":
      return produce(state, (draft) => {
        draft.selectedSubject = draft.subjects.length;
        draft.subjects.push({
          name: "새로운 과목",
          numberOfTeams: 0,
          numberOfPeoplePerTeam: 0,
          students: [],
          weights: [],
          teams: [],
        });
      });
    case "CREATE_NEW_TEAMS":
      return produce(state, (draft) => {
        draft.subjects[draft.selectedSubject].teams = action.teams;
      });
    case "CHANGE_SUBJECT":
      return produce(state, (draft) => {
        draft.selectedSubject = action.subject;
      });
    case "CHANGE_SETTING":
      return produce(state, (draft) => {
        draft.subjects[draft.selectedSubject].name = action.subjectInfo.name;
        draft.subjects[draft.selectedSubject].numberOfTeams =
          action.subjectInfo.numberOfTeams;
        draft.subjects[draft.selectedSubject].numberOfPeoplePerTeam =
          action.subjectInfo.numberOfPeoplePerTeam;
        draft.subjects[draft.selectedSubject].weights = action.weights;
      });
    case "CALCULATE_STUDENTS_WEIGHTS":
      return produce(state, (draft) => {
        draft.subjects[draft.selectedSubject].students.map((student) => {
          return (student.sumWeight = StudentRating(
            GradesCombineWeights(
              student,
              draft.subjects[draft.selectedSubject].weights
            )
          ));
        });
      });
    default:
      throw new Error("Doesn't have action type");
  }
};

export default reducer;
