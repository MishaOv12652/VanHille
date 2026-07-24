import { Student } from './student.entity';

export const STUDENT_REPOSITORY = Symbol('STUDENT_REPOSITORY');

export interface IStudentRepository {
  findById(id: number): Promise<Student[]>;
  create(student: Partial<Student>): Promise<Student>;
  updateGroupNum(id: number, groupNum: number): Promise<Student | null>;
  saveAnswer(
    id: number,
    ansNum: string,
    qnumber: number,
    tryNum: number,
  ): Promise<Student | null>;
  findDoneInLastThreeHours(): Promise<Student[]>;
  saveCorrectAnswersPerDifficulty(
    id: number,
    tryNum: number,
    arr: string[],
  ): Promise<Student | null>;
  nullifyAnswers(id: number, tryNum: number): Promise<Student | null>;
  findBetweenDates(sDate: number, fDate: number): Promise<Student[]>;
  findByCourseAndGroup(
    courseNum: number,
    groupNum: number,
  ): Promise<Student[]>;
  findAllUniqueCourseNums(): Promise<Student[]>;
  findGroupNumsForCourse(courseNum: number): Promise<Student[]>;
}
