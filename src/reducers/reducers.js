import produce from "immer";
import GradesCombineWeights from "../utils/GradesCombineWeights";
import StudentRating from "../utils/StudentRating";

export const initialState = {
  subjects: [
    {
      name: "알고리즘",
      numberOfTeams: 3,
      students: [
        {
          name: "홍길동",
          studentId: "20101110",
          grades: ["A+", "B+", "A+", "B+"],
          sumWeight: 20,
        },
        {
          name: "김길동",
          studentId: "20101011",
          grades: ["A+", "B+", "A+", "B+"],
          sumWeight: 20,
        },
        {
          name: "이길동",
          studentId: "20111010",
          grades: ["A+", "B+", "B+", "B+"],
          sumWeight: 37.5,
        },
      ],
      weights: [
        {
          name: "가중치1",
          value: 10,
        },
        {
          name: "가중치2",
          value: 10,
        },
        {
          name: "가중치3",
          value: 10,
        },
        {
          name: "가중치4",
          value: 10,
        },
      ],
      teams: [],
    },
    {
      name: "데이터 베이스",
      numberOfTeams: 0,
      students: [],
      weights: [
        {
          name: "가중치1",
          value: 10,
        },
      ],
      teams: [],
    },
  ],
  selectedSubject: 0,
};

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
