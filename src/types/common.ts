import { Grade } from './StudentList';

export interface Student {
  grades: Grade[];
  name: string;
  studentId: string;
  sumWeight?: number;
}

export interface Team {
  sumWeight: number;
  members: Student[];
}
export interface Weight {
  name: string;
  value: number;
}
export interface Subject {
  name: string;
  numberOfTeams: number;
  students: Student[];
  teams: Team[];
  weights: Weight[];
}

export interface GlobalState {
  selectedSubject: number;
  subjects: Subject[];
}

export interface CombinedWeight {
  grade: string;
  value: number;
}
