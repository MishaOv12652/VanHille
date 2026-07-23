import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';
import * as lodash from 'lodash';
import { IQuizResultRepository } from '../domain/quiz-result-repository.interface';
import { QuizResult } from '../domain/quiz-result.entity';
import { QuizResultDocument } from './mongoose/quiz-result.schema';

@Injectable()
export class QuizResultMongooseRepository implements IQuizResultRepository {
  constructor(
    @InjectModel(QuizResultDocument.name)
    private readonly model: Model<QuizResultDocument>,
  ) {}

  async findByGroupAndCourse(
    gNum: number,
    cNum: number,
  ): Promise<QuizResult[]> {
    const docs = await this.model
      .find({ $and: [{ groupNum: gNum, courseNum: cNum }] })
      .sort({ date: -1 });
    return docs.map((doc) => this.toDomain(doc));
  }

  async findOrCreate(
    results: number[],
    courseNum: number,
    groupNum: number,
  ): Promise<QuizResult[]> {
    const query = { $and: [{ results, groupNum, courseNum }] };
    const existing = await this.model.find(query);
    if (existing.length === 0) {
      const created = await this.model.create({ results, groupNum, courseNum });
      return [this.toDomain(created)];
    }
    return existing.map((doc) => this.toDomain(doc));
  }

  async findAllInLastSemester(): Promise<QuizResult[]> {
    const lastQuiz = moment().add(1, 'day').valueOf();
    // NB: the legacy query object was `{date: {$gte: fourMonth}, date:
    // {$lt: lastQuiz}}` — a duplicate `date` key, which JS object literals
    // silently resolve by letting the later assignment win. The `$gte`
    // four-month lower bound was therefore always discarded in production;
    // preserved here as a `$lt`-only filter (see migration plan).
    const docs = await this.model
      .find({ $and: [{ date: { $lt: lastQuiz } }] })
      .sort({ courseNum: 1 });
    return docs.map((doc) => this.toDomain(doc));
  }

  async findByCourseNum(courseNum: number): Promise<QuizResult[]> {
    const docs = await this.model
      .find({ courseNum })
      .sort({ date: 1 });
    return docs.map((doc) => this.toDomain(doc));
  }

  async findAllUnique(): Promise<QuizResult[]> {
    const docs = await this.model.find({});
    const unique = lodash.uniqBy(
      docs,
      (doc: QuizResultDocument) => `${doc.courseNum}-${doc.groupNum}`,
    );
    return unique.map((doc: QuizResultDocument) => this.toDomain(doc));
  }

  private toDomain(doc: QuizResultDocument): QuizResult {
    return {
      _id: doc._id.toString(),
      date: doc.date,
      results: doc.results,
      courseNum: doc.courseNum,
      groupNum: doc.groupNum,
    };
  }
}
