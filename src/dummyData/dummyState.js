import produce from "immer";
import GradesCombineWeights from "../utils/GradesCombineWeights";
import StudentRating from "../utils/StudentRating";

const dummy = {
  subjects: [
    {
      name: "알고리즘",
      numberOfTeams: 4,
      students: [
        {
          name: "유수혜",
          studentId: "201900000",
          grades: ["A+", "A+", "B+", "B+", "A", "A"],
        }, // 수학에 강함
        {
          name: "박진희",
          studentId: "201900001",
          grades: ["A+", "A", "B", "B+", "A", "A"],
        },
        {
          name: "허태훈",
          studentId: "201900002",
          grades: ["B+", "B+", "B+", "B+", "B+", "B+"],
        },
        {
          name: "최석호",
          studentId: "201900003",
          grades: ["C+", "B", "B+", "B", "A", "A"],
        },
        {
          name: "고민혁",
          studentId: "201900004",
          grades: ["A+", "B", "B", "B+", "A", "B+"],
        },
        {
          name: "손경일",
          studentId: "201900005",
          grades: ["A+", "A", "B", "B", "A", "B+"],
        }, // 위 아래 데이터셋은 같은 점수임에도 불구하고 가중치 때문에 값이 다르게나옴
        {
          name: "김광현",
          studentId: "201900006",
          grades: ["A", "B", "A+", "A+", "B", "B"],
        },
        {
          name: "봉명자",
          studentId: "201900007",
          grades: ["C+", "C", "D+", "B+", "B", "C+"],
        },
        {
          name: "봉준수",
          studentId: "201900008",
          grades: ["C+", "C+", "B+", "B", "B", "C+"],
        },
        {
          name: "백주옥",
          studentId: "201900009",
          grades: ["A+", "A", "A+", "A+", "A", "A+"],
        },
        {
          name: "이형욱",
          studentId: "201900010",
          grades: ["A+", "B", "C+", "B", "B+", "B"],
        },
        {
          name: "복도준",
          studentId: "201900011",
          grades: ["C+", "D", "D+", "F", "C+", "C"],
        },
        {
          name: "장진주",
          studentId: "201900012",
          grades: ["B+", "C", "C+", "B", "B+", "C+"],
        },
        {
          name: "복종하",
          studentId: "201900013",
          grades: ["A+", "A+", "A+", "A+", "A+", "A+"],
        },
        {
          name: "유진우",
          studentId: "201900014",
          grades: ["B+", "B+", "B+", "B+", "B+", "B+"],
        },
        {
          name: "박정일",
          studentId: "201900015",
          grades: ["C+", "C+", "C+", "C", "B", "C+"],
        },
        {
          name: "성수경",
          studentId: "201900016",
          grades: ["B", "B", "B", "B", "B+", "B"],
        },
        {
          name: "최원기",
          studentId: "2019000017",
          grades: ["B+", "C+", "B+", "B", "A+", "C+"],
        },
        {
          name: "노기호",
          studentId: "2019000018",
          grades: ["B+", "C+", "B+", "B", "A+", "B"],
        },
        {
          name: "류건",
          studentId: "2019000019",
          grades: ["B+", "C+", "C+", "A+", "A+", "A+"],
        },
        {
          name: "전남규",
          studentId: "2019000020",
          grades: ["A+", "B+", "B+", "A", "C+", "A"],
        },
      ],
      weights: [
        {
          name: "확률과 통계",
          value: 30,
        },
        {
          name: "소프트웨어 수학",
          value: 30,
        },
        {
          name: "문제해결기법",
          value: 40,
        },
        {
          name: "자료구조 및 실습",
          value: 50,
        },
        {
          name: "응용프로그래밍",
          value: 20,
        },
        {
          name: "프로그래밍기초",
          value: 20,
        },
      ],
      teams: [],
    },
  ],
  selectedSubject: 0,
};

dummy.subjects[0].students.map((student) => {
  return produce(student, (draft) => {
    student.sumWeight = StudentRating(
      GradesCombineWeights(student, dummy.subjects[0].weights)
    );
  });
});

const exportData = dummy;

export default exportData;
