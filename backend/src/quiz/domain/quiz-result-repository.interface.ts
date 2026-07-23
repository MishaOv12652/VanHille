import { QuizResult } from './quiz-result.entity';

export const QUIZ_RESULT_REPOSITORY = Symbol('QUIZ_RESULT_REPOSITORY');

export interface IQuizResultRepository {
  findByGroupAndCourse(gNum: number, cNum: number): Promise<QuizResult[]>;
  findOrCreate(
    results: number[],
    courseNum: number,
    groupNum: number,
  ): Promise<QuizResult[]>;
  findAllInLastSemester(): Promise<QuizResult[]>;
  findByCourseNum(courseNum: number): Promise<QuizResult[]>;
  findAllUnique(): Promise<QuizResult[]>;
}
