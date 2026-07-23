import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IQuestionRepository } from '../domain/question-repository.interface';
import { Question } from '../domain/question.entity';
import { QuestionDocument } from './mongoose/question.schema';

@Injectable()
export class QuestionMongooseRepository implements IQuestionRepository {
  constructor(
    @InjectModel(QuestionDocument.name)
    private readonly model: Model<QuestionDocument>,
  ) {}

  async findAll(): Promise<Question[]> {
    const docs = await this.model.find({}).sort({ Qid: 1 });
    return docs.map((doc) => this.toDomain(doc));
  }

  async findByQid(qid: number): Promise<Question | null> {
    const doc = await this.model.findOne({ Qid: qid });
    return doc ? this.toDomain(doc) : null;
  }

  private toDomain(doc: QuestionDocument): Question {
    return {
      _id: doc._id.toString(),
      Qid: doc.Qid,
      Question: doc.Question,
      Answers: doc.Answers,
      correctA: doc.correctA,
      dif: doc.dif,
      Image: doc.Image,
    };
  }
}
