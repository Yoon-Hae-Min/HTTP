import produce from "immer";

export const initialState = {
  subjects: [
    {
      name: "알고리즘",
      numberOfTeams: 3,
      numberOfPeoplePerTeam: 0,
      students: [
        {
          name: "홍길동",
          studentId: "20101010",
          grades: ["A+", "B+", "A+", "B+"],
          sumWeight: 20,
        },
        {
          name: "홍길동",
          studentId: "20101010",
          grades: ["A+", "B+", "A+", "B+"],
          sumWeight: 20,
        },
        {
          name: "홍길동",
          studentId: "20101010",
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
          name: "가중치1",
          value: 10,
        },
        {
          name: "가중치1",
          value: 10,
        },
        {
          name: "가중치1",
          value: 10,
        },
      ],
      teams: [],
    },
    {
      name: "데이터 베이스",
      numberOfTeams: 0,
      numberOfPeoplePerTeam: 0,
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
    default:
      throw new Error("Doesn't have action type");
  }
};

export default reducer;
