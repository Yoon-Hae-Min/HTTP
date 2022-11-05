let ScoreWeight = {
  data : [
  {
  grade : "A+",
  weightrate : 40,
},
    {
  grade : "A+",
  weightrate : 30,
},
    {
  grade : "B+",
  weightrate : 10,
},
    {
  grade : "A",
  weightrate : 20,
},
    {
  grade : "C+",
  weightrate : 50,
},
  
  ]
}

//가중치를 더한 학생의 총 평점 구하기
//score 배열에는 홀수 인덱스에 원래 점수, 짝수 인덱스에 가중치
function FindScore(score)
  { 
    let originalscore = 0;
    let Sum = 0
    let finalScore = 0;
    
    for (let i = 0; i < score.data.length; i++)
      {
        if (score.data[i].grade == "A+")
          originalscore = 4.5;
        else if (score.data[i].grade == "A")
          originalscore = 4.0;
        else if (score.data[i].grade == "B+")
          originalscore = 3.5;
        else if (score.data[i].grade == "B")
          originalscore = 3.0;
        else if (score.data[i].grade == "C+")
          originalscore = 2.5;
        else if (score.data[i].grade == "C")
          originalscore = 2.0;
        else if (score.data[i].grade == "D+")
          originalscore = 1.5;
        else if (score.data[i].grade == "D")
          originalscore = 1.0;
        else if (score.data[i].grade == "F")
          originalscore = 0;
         
        Sum += originalscore * score.data[i].weightrate / 100;
      }
    
    finalScore = Sum / score.data.length;
    return finalScore;
  }