//가중치를 더한 학생의 총 평점 구하기
//score 배열에는 홀수 인덱스에 원래 점수, 짝수 인덱스에 가중치
export default function StudentRating(score) {
  let originalscore = 0;
  let Sum = 0;
  let finalScore = 0;
  let insertedNum = 0;

  for (let i = 0; i < score.length; i++) {
    if (score[i].grade === "A+") originalscore = 4.5;
    else if (score[i].grade === "A") originalscore = 4.0;
    else if (score[i].grade === "B+") originalscore = 3.5;
    else if (score[i].grade === "B") originalscore = 3.0;
    else if (score[i].grade === "C+") originalscore = 2.5;
    else if (score[i].grade === "C") originalscore = 2.0;
    else if (score[i].grade === "D+") originalscore = 1.5;
    else if (score[i].grade === "D") originalscore = 1.0;
    else if (score[i].grade === "F") originalscore = 0;
    else originalscore = 0;
    insertedNum += 1;
    Sum += originalscore * score[i].value;
  }
  finalScore = Sum / insertedNum;
  console.log(finalScore);
  return finalScore;
}
