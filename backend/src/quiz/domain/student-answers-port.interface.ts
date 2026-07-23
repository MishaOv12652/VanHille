// Narrow read-only port owned by QuizModule for the student data it needs to
// grade quizzes. Deliberately NOT a dependency on StudentsModule's own
// repository/entities — each module can migrate to a different persistence
// backend independently (see migration plan).

export interface StudentAnswers {
  Answers1?: unknown[];
  Answers2?: unknown[];
}

export interface StudentAnswersPerDifficulty {
  correctAperdif1?: unknown[];
  correctAperdif2?: unknown[];
}

export const STUDENT_ANSWERS_PORT = Symbol('STUDENT_ANSWERS_PORT');

export interface IStudentAnswersPort {
  findById(studentId: number): Promise<StudentAnswers[]>;
  findByCourseAndGroup(
    courseNum: number,
    groupNum: number,
  ): Promise<StudentAnswersPerDifficulty[]>;
}
