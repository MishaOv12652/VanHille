import { Injectable } from '@nestjs/common';
import { zipWith } from 'lodash';
import { StudentsService } from '../students/students.service';

@Injectable()
export class CalcClassService {
  constructor(private readonly studentsService: StudentsService) {}

  async calcClass(
    tryNum: string,
    courseNum: string,
    groupNum: string,
  ): Promise<{ results: number[]; courseNum: string; groupNum: string }> {
    const students = await this.studentsService.getStudentsByCourseAndGroupNum(
      courseNum,
      groupNum,
    );

    if (students.length === 0) {
      throw new Error(
        'אין סטודנטים שעשו את השאלון עם מספרי הקורס או הקבוצות שבחרת',
      );
    }

    // All state is local — no module-level variables (fixes the concurrency bug)
    let corAnswersPerDiffArray = [0, 0, 0, 0, 0];
    let numOfStudents = 0;

    students.forEach((student) => {
      const arrayToAdd =
        parseFloat(tryNum) === 1
          ? student.correctAperdif1
          : student.correctAperdif2;

      corAnswersPerDiffArray = zipWith(
        corAnswersPerDiffArray,
        arrayToAdd,
        (a: number, b: number) =>
          parseFloat(String(a || 0)) + parseFloat(String(b || 0)),
      );
      numOfStudents++;
    });

    // Convert raw sums to percentages (each difficulty has 5 questions)
    for (let i = 0; i < 5; i++) {
      corAnswersPerDiffArray[i] =
        (corAnswersPerDiffArray[i] / (numOfStudents * 5)) * 100;
    }

    return { results: corAnswersPerDiffArray, courseNum, groupNum };
  }
}
