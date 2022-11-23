import { Student, Subject, Team, Weight } from './common';
import { SubjectInfo } from './Setting';

interface CreateNewStudentAction {
  type: 'CREATE_NEW_STUDENT';
  student: Student;
}

interface ChangeStudentAction {
  type: 'CHANGE_STUDENT';
  index: number;
  student: Student;
}
interface DeleteStudentAction {
  type: 'DELETE_STUDENT';
  index: number;
}

interface CreateNewSubjectAction {
  type: 'CREATE_NEW_SUBJECT';
}

interface DeleteSubjectAction {
  type: 'DELETE_SUBJECT';
}

interface CreateNewTeamAction {
  type: 'CREATE_NEW_TEAM';
  teams: Team[];
}

interface ChangeSubjectAction {
  type: 'CHANGE_SUBJECT';
  subject: number;
}

interface ChangeSettingAction {
  type: 'CHANGE_SETTING';
  subjectInfo: SubjectInfo;
  deletedIndex: number[];
  weights: Weight[];
}

interface CalculateStudentsWeightsAction {
  type: 'CALCULATE_STUDENTS_WEIGHTS';
}

interface DeleteWeight {
  type: 'DELETE_WEIGHT';
  index: number;
}

interface ToggleSynchronizationAction {
  type: 'TOGGLE_SYNCHRONIZATION';
}

export type Actions =
  | CreateNewStudentAction
  | ChangeStudentAction
  | DeleteStudentAction
  | CreateNewSubjectAction
  | CreateNewSubjectAction
  | DeleteSubjectAction
  | CreateNewTeamAction
  | ChangeSubjectAction
  | ChangeSettingAction
  | CalculateStudentsWeightsAction
  | DeleteWeight
  | ToggleSynchronizationAction;
