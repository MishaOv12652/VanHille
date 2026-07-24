import { Inject, Injectable } from '@nestjs/common';
import { Student } from '../domain/student.entity';
import {
  IStudentRepository,
  STUDENT_REPOSITORY,
} from '../domain/student-repository.interface';

@Injectable()
export class StudentsService {
  constructor(
    @Inject(STUDENT_REPOSITORY)
    private readonly studentRepository: IStudentRepository,
  ) {}

  register(ID: number, groupNum: number, courseNum: number): Promise<Student> {
    // NB: the legacy Express route built this document with lowercase
    // `answers1`/`answers2` keys, which don't match the schema's
    // `Answers1`/`Answers2` paths and were therefore silently dropped by
    // Mongoose on save. Preserved here so registered students end up with
    // the same shape (Answers1/Answers2 absent until the first answer PUT).
    return this.studentRepository.create({
      ID,
      groupNum,
      courseNum,
      correctAperdif1: [],
      correctAperdif2: [],
    });
  }

  getById(id: number): Promise<Student[]> {
    return this.studentRepository.findById(id);
  }

  saveAnswer(
    id: number,
    ansNum: string,
    qnumber: number,
    tryNum: number,
  ): Promise<Student | null> {
    return this.studentRepository.saveAnswer(id, ansNum, qnumber, tryNum);
  }

  getAllDoneInLastThreeHours(): Promise<Student[]> {
    return this.studentRepository.findDoneInLastThreeHours();
  }

  /**
   * Legacy `/calc/:tryNum/:id/*` route parsed its variadic tail through an
   * Express 4 path-to-regexp quirk: the `:arr` group only ever captured the
   * first character of the first tail segment. Reproduced explicitly here
   * (see migration plan) rather than relying on any route-pattern magic.
   */
  buildLegacyCorrectAnswersArray(splat: string[]): string[] {
    const [first, ...rest] = splat;
    return [first.charAt(0), ...rest];
  }

  saveCorrectAnswersPerDifficulty(
    tryNum: number,
    id: number,
    splat: string[],
  ): Promise<Student | null> {
    const arr = this.buildLegacyCorrectAnswersArray(splat);
    return this.studentRepository.saveCorrectAnswersPerDifficulty(
      id,
      tryNum,
      arr,
    );
  }

  findBetweenDates(sDate: number, fDate: number): Promise<Student[]> {
    return this.studentRepository.findBetweenDates(sDate, fDate);
  }

  nullifyAnswers(id: number, tryNum: number): Promise<Student | null> {
    return this.studentRepository.nullifyAnswers(id, tryNum);
  }

  updateGroupNum(id: number, groupNum: number): Promise<Student | null> {
    return this.studentRepository.updateGroupNum(id, groupNum);
  }

  getByCourseAndGroup(
    courseNum: number,
    groupNum: number,
  ): Promise<Student[]> {
    return this.studentRepository.findByCourseAndGroup(courseNum, groupNum);
  }

  async getAllUniqueCourseNums(): Promise<Student[]> {
    const result = await this.studentRepository.findAllUniqueCourseNums();
    if (result.length === 0) {
      throw new Error('אין תוצאות של סטודנטיפ');
    }
    return result;
  }

  async getGroupNumsForCourse(courseNum: number): Promise<Student[]> {
    const result = await this.studentRepository.findGroupNumsForCourse(
      courseNum,
    );
    if (result.length === 0) {
      throw new Error('אין תוצאות של סטודנטיפ');
    }
    return result;
  }
}
