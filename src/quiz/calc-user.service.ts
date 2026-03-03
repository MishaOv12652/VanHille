import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';
import { Student, StudentDocument } from '../students/schemas/student.schema';

@Injectable()
export class CalcUserService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async calcUser(studentId: string, tryNum: string): Promise<number[]> {
    const questions = await this.questionModel.find({}).sort({ Qid: 1 });

    // Build answer object array — no module-level state (fixes the concurrency bug)
    const answerObjectArray = questions.map((q) => ({
      correctA: q.correctA,
      difficulty: q.dif,
      userAnswer: 0,
    }));

    const students = await this.studentModel.find({ ID: studentId });
    if (students.length === 0) {
      throw new Error('אין סטודנט כזה');
    }

    const student = students[0];
    const userAnswers =
      parseFloat(tryNum) === 1 ? student.Answers1 : student.Answers2;

    for (let i = 0; i < 25; i++) {
      answerObjectArray[i].userAnswer =
        userAnswers[i] !== undefined ? userAnswers[i] : 0;
    }

    // Tally correct answers per difficulty level (1-indexed → 0-indexed array)
    const correctAnswersPerDifficulty = [0, 0, 0, 0, 0];
    answerObjectArray.forEach((obj) => {
      if (parseFloat(String(obj.userAnswer)) === parseFloat(String(obj.correctA))) {
        correctAnswersPerDifficulty[obj.difficulty - 1] += 1;
      }
    });

    return correctAnswersPerDifficulty;
  }
}
