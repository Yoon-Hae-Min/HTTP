export interface EditStudent {
  index: number;
  mode: Mode;
}

export type Grade = 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D+' | 'D' | 'F';
export type Mode = 'Edit' | 'Add' | 'Delete' | 'Save';
