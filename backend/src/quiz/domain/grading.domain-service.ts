import * as lodash from 'lodash';
import {
  StudentAnswers,
  StudentAnswersPerDifficulty,
} from './student-answers-port.interface';

/**
 * Pure grading math, ported 1:1 from the legacy ClacModules/CalcUser.js and
 * ClacModules/calcClassRes.js. No I/O — everything needed is passed in, so
 * this is the easiest part of the app to unit test.
 */

export function calcUserScore(
  questions: { correctA: number; dif: number }[],
  studentAnswers: StudentAnswers[],
  tryNum: number,
): number[] {
  if (studentAnswers.length === 0) {
    throw new Error('אין סטודנט כזה');
  }

  const correctAnswersPerDifficulty = [0, 0, 0, 0, 0];
  const answerObjectArray = questions.map((question) => ({
    correctA: question.correctA,
    difficulty: question.dif,
    userAnswer: 0 as string | number,
  }));

  const userAnswers =
    tryNum === 1 ? studentAnswers[0].Answers1 : studentAnswers[0].Answers2;

  for (let i = 0; i < 25; i++) {
    answerObjectArray[i].userAnswer =
      userAnswers?.[i] !== undefined ? (userAnswers[i] as string | number) : 0;
  }

  answerObjectArray.forEach((answerObj) => {
    if (
      parseFloat(String(answerObj.userAnswer)) ===
      parseFloat(String(answerObj.correctA))
    ) {
      correctAnswersPerDifficulty[answerObj.difficulty - 1] += 1;
    }
  });

  return correctAnswersPerDifficulty;
}

export function calcClassAverages(
  students: StudentAnswersPerDifficulty[],
  tryNum: number,
): number[] {
  if (students.length === 0) {
    throw new Error(
      'אין סטודנטים שעשו את השאלון עם מספרי הקורס או הקבוצות שבחרת',
    );
  }

  let corAnswersPerDiffArray: number[] = [0, 0, 0, 0, 0];
  let numOfStudentsDoneTheQuiz = 0;

  students.forEach((student) => {
    const arrayToAdd =
      tryNum === 1 ? student.correctAperdif1 : student.correctAperdif2;
    corAnswersPerDiffArray = lodash.zipWith(
      corAnswersPerDiffArray,
      arrayToAdd,
      (a: unknown, b: unknown) =>
        parseFloat(String(a || 0)) + parseFloat(String(b || 0)),
    );
    numOfStudentsDoneTheQuiz++;
  });

  for (let i = 0; i < 5; i++) {
    corAnswersPerDiffArray[i] =
      (corAnswersPerDiffArray[i] / (numOfStudentsDoneTheQuiz * 5)) * 100;
  }

  return corAnswersPerDiffArray;
}
