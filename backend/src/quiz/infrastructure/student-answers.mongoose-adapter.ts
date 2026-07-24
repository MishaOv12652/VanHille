import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  IStudentAnswersPort,
  StudentAnswers,
  StudentAnswersPerDifficulty,
} from '../domain/student-answers-port.interface';
import { QuizStudentDocument } from './mongoose/quiz-student.schema';

@Injectable()
export class StudentAnswersMongooseAdapter implements IStudentAnswersPort {
  constructor(
    @InjectModel(QuizStudentDocument.name)
    private readonly model: Model<QuizStudentDocument>,
  ) {}

  async findById(studentId: number): Promise<StudentAnswers[]> {
    const docs = await this.model.find({ ID: studentId });
    return docs.map((doc) => ({
      Answers1: doc.Answers1,
      Answers2: doc.Answers2,
    }));
  }

  async findByCourseAndGroup(
    courseNum: number,
    groupNum: number,
  ): Promise<StudentAnswersPerDifficulty[]> {
    const docs = await this.model.find({
      $and: [{ courseNum, groupNum }],
    });
    return docs.map((doc) => ({
      correctAperdif1: doc.correctAperdif1,
      correctAperdif2: doc.correctAperdif2,
    }));
  }
}
