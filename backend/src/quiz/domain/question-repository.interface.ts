import { Question } from './question.entity';

export const QUESTION_REPOSITORY = Symbol('QUESTION_REPOSITORY');

export interface IQuestionRepository {
  findAll(): Promise<Question[]>;
  findByQid(qid: number): Promise<Question | null>;
}
