interface Student{
    grades:string[],
    name:string,
    studentId:string,
    sumWeight:number,
}

interface Team{
    sumWeight:number,
    members:Student[],
}
interface Weight{
    name:string,
    value:number,
}

interface Subjects{
    selectedSubject:number,
    subjects:{
        name:string,
        numberOfTeams:number,
        students:Student[],
        teams:Team[],
        weights:Weight[],
    }
}

