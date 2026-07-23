export interface Question {
  _id?: string;
  Qid: number;
  Question: string;
  Answers: unknown[];
  correctA: number;
  dif: number;
  Image: string;
}
