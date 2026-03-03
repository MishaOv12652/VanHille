import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { subMonths, addDays } from 'date-fns';
import { Quiz, QuizDocument } from './schemas/quiz.schema';
import { Question, QuestionDocument } from './schemas/question.schema';
import { CalcUserService } from './calc-user.service';
import { CalcClassService } from './calc-class.service';

@Injectable()
export class QuizService {
  constructor(
    @InjectModel(Quiz.name) private quizModel: Model<QuizDocument>,
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
    private readonly calcUserService: CalcUserService,
    private readonly calcClassService: CalcClassService,
  ) {}

  async getAllQuestions(): Promise<QuestionDocument[]> {
    return this.questionModel.find({}).sort({ Qid: 1 });
  }

  async getQuestion(qid: string): Promise<QuestionDocument | null> {
    return this.questionModel.findOne({ Qid: parseInt(qid, 10) });
  }

  async createStudentResult(studentId: string, tryNum: string): Promise<number[]> {
    return this.calcUserService.calcUser(studentId, tryNum);
  }

  async createAndSaveClassResults(
    tryNum: string,
    courseNum: string,
    groupNum: string,
  ): Promise<QuizDocument> {
    const { results, courseNum: cn, groupNum: gn } =
      await this.calcClassService.calcClass(tryNum, courseNum, groupNum);

    // Only save if this exact result set doesn't already exist
    const existing = await this.quizModel.findOne({
      results,
      groupNum: parseFloat(gn),
      courseNum: parseFloat(cn),
    });

    if (!existing) {
      const newQuiz = new this.quizModel({
        results,
        groupNum: parseFloat(gn),
        courseNum: parseFloat(cn),
      });
      return newQuiz.save();
    }
    return existing;
  }

  async getAllQuizesDoneInTheLastSemester(): Promise<QuizDocument[]> {
    const fourMonthsAgo = subMonths(new Date(), 4).getTime();
    const tomorrow = addDays(new Date(), 1).getTime();
    return this.quizModel
      .find({ $and: [{ date: { $gte: fourMonthsAgo } }, { date: { $lt: tomorrow } }] })
      .sort({ courseNum: 1 });
  }

  async getResultsByGroupNumAndCourseNum(
    gNum: string,
    cNum: string,
  ): Promise<QuizDocument[]> {
    return this.quizModel
      .find({ groupNum: parseInt(gNum, 10), courseNum: parseInt(cNum, 10) })
      .sort({ date: -1 });
  }

  async getQuizByCourseNum(courseNum: string): Promise<QuizDocument[]> {
    return this.quizModel
      .find({ courseNum })
      .sort({ date: 1 });
  }

  async getAllUniqueQuizes(): Promise<QuizDocument[]> {
    return this.quizModel.find({}).sort({ courseNum: 1 });
  }
}
