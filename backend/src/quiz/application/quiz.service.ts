import { Inject, Injectable } from '@nestjs/common';
import { Question } from '../domain/question.entity';
import { QuizResult } from '../domain/quiz-result.entity';
import {
  IQuestionRepository,
  QUESTION_REPOSITORY,
} from '../domain/question-repository.interface';
import {
  IQuizResultRepository,
  QUIZ_RESULT_REPOSITORY,
} from '../domain/quiz-result-repository.interface';
import {
  IStudentAnswersPort,
  STUDENT_ANSWERS_PORT,
} from '../domain/student-answers-port.interface';
import { calcClassAverages, calcUserScore } from '../domain/grading.domain-service';

@Injectable()
export class QuizService {
  constructor(
    @Inject(QUESTION_REPOSITORY)
    private readonly questionRepository: IQuestionRepository,
    @Inject(QUIZ_RESULT_REPOSITORY)
    private readonly quizResultRepository: IQuizResultRepository,
    @Inject(STUDENT_ANSWERS_PORT)
    private readonly studentAnswersPort: IStudentAnswersPort,
  ) {}

  getAllQuestions(): Promise<Question[]> {
    return this.questionRepository.findAll();
  }

  getQuestion(qid: number): Promise<Question | null> {
    return this.questionRepository.findByQid(qid);
  }

  async calcStudent(tryNum: number, studentId: number): Promise<number[]> {
    const [questions, studentAnswers] = await Promise.all([
      this.questionRepository.findAll(),
      this.studentAnswersPort.findById(studentId),
    ]);
    return calcUserScore(questions, studentAnswers, tryNum);
  }

  async calcClass(
    tryNum: number,
    courseNum: number,
    groupNum: number,
  ): Promise<QuizResult[]> {
    const students = await this.studentAnswersPort.findByCourseAndGroup(
      courseNum,
      groupNum,
    );
    const corAnswersPerDiffArray = calcClassAverages(students, tryNum);
    return this.quizResultRepository.findOrCreate(
      corAnswersPerDiffArray,
      courseNum,
      groupNum,
    );
  }

  getAllQuizesDoneInTheLastSemester(): Promise<QuizResult[]> {
    return this.quizResultRepository.findAllInLastSemester();
  }

  getResultsByGroupAndCourse(
    gNum: number,
    cNum: number,
  ): Promise<QuizResult[]> {
    return this.quizResultRepository.findByGroupAndCourse(gNum, cNum);
  }

  getQuizByCourseNum(courseNum: number): Promise<QuizResult[]> {
    return this.quizResultRepository.findByCourseNum(courseNum);
  }

  getAllUniqueQuizzes(): Promise<QuizResult[]> {
    return this.quizResultRepository.findAllUnique();
  }
}
