import produce from "immer";
import exportData from "../dummyData/dummyState";
import GradesCombineWeights from "../utils/GradesCombineWeights";
import StudentRating from "../utils/StudentRating";

export const initialState =
  JSON.parse(localStorage.getItem("data")) ?? exportData;

export const initialSynchronization =
  JSON.parse(localStorage.getItem("isSynchronization")) ?? true;
// {
//   subjects: [
//     {
//       name: "과목명",
//       numberOfTeams: 0,
//       students: [],
//       weights: [],
//       teams: [],
//     },
//   ],
//   selectedSubject: 0,
//   isSynchronization: true,
// };

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
    case "DELETE_SUBJECT":
      return produce(state, (draft) => {
        draft.subjects.splice(draft.selectedSubject, 1);
        draft.selectedSubject = draft.subjects.length - 1;
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
        draft.subjects[draft.selectedSubject].weights = action.weights;
        draft.subjects[draft.selectedSubject].students.map((student) =>
          action.deletedIndex.map((index) => student.grades.splice(index, 1))
        );
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
    case "DELETE_WEIGHT":
      return produce(state, (draft) => {
        draft.subjects[draft.selectedSubject].weights.splice(action.index, 1);
        draft.subjects[draft.selectedSubject].students.map((student) =>
          student.grades.splice(action.index, 1)
        );
      });
    case "TOGGLE_SYNCHRONIZATION":
      return produce(state, (draft) => {
        if (localStorage.getItem("isSynchronization") === "true") {
          localStorage.removeItem("data");
          localStorage.setItem("isSynchronization", false);
        } else {
          localStorage.setItem("isSynchronization", true);
        }
      });
    default:
      throw new Error("Doesn't have action type");
  }
};

export default reducer;
