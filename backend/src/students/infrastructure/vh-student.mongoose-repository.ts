import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as moment from 'moment';
import * as lodash from 'lodash';
import { IStudentRepository } from '../domain/student-repository.interface';
import { Student } from '../domain/student.entity';
import { VhStudentDocument } from './mongoose/vh-student.schema';

@Injectable()
export class VhStudentMongooseRepository implements IStudentRepository {
  constructor(
    @InjectModel(VhStudentDocument.name)
    private readonly model: Model<VhStudentDocument>,
  ) {}

  async findById(id: number): Promise<Student[]> {
    const docs = await this.model.find({ ID: id });
    return docs.map((doc) => this.toDomain(doc));
  }

  async create(student: Partial<Student>): Promise<Student> {
    const created = await this.model.create(student);
    return this.toDomain(created);
  }

  async updateGroupNum(
    id: number,
    groupNum: number,
  ): Promise<Student | null> {
    const doc = await this.model.findOneAndUpdate(
      { ID: id },
      { groupNum, date: moment().utc(true) },
      { safe: true, new: true },
    );
    return doc ? this.toDomain(doc) : null;
  }

  async saveAnswer(
    id: number,
    ansNum: string,
    qnumber: number,
    tryNum: number,
  ): Promise<Student | null> {
    const index = (qnumber - 1).toString();
    const setter = { [`Answers${tryNum}.${index}`]: ansNum };
    const doc = await this.model.findOneAndUpdate(
      { ID: id },
      { $set: setter },
      { safe: true, new: true },
    );
    return doc ? this.toDomain(doc) : null;
  }

  async findDoneInLastThreeHours(): Promise<Student[]> {
    const three = moment().subtract(3, 'hours').valueOf();
    const docs = await this.model.find({ date: { $gte: three } });
    return docs.map((doc) => this.toDomain(doc));
  }

  async saveCorrectAnswersPerDifficulty(
    id: number,
    tryNum: number,
    arr: string[],
  ): Promise<Student | null> {
    const setter = { [`correctAperdif${tryNum}`]: arr };
    const doc = await this.model.findOneAndUpdate(
      { ID: id },
      { $set: setter },
      { safe: true, new: true },
    );
    return doc ? this.toDomain(doc) : null;
  }

  async nullifyAnswers(
    id: number,
    tryNum: number,
  ): Promise<Student | null> {
    const field = tryNum === 1 ? 'Answers1' : 'Answers2';
    const doc = await this.model.findOneAndUpdate(
      { ID: id },
      { [field]: [] },
      { safe: true, upsert: true, new: true },
    );
    return doc ? this.toDomain(doc) : null;
  }

  async findBetweenDates(sDate: number, fDate: number): Promise<Student[]> {
    const docs = await this.model.find({
      $and: [{ date: { $gte: moment(sDate) } }, { date: { $lte: moment(fDate) } }],
    });
    return docs.map((doc) => this.toDomain(doc));
  }

  async findByCourseAndGroup(
    courseNum: number,
    groupNum: number,
  ): Promise<Student[]> {
    const docs = await this.model.find({
      $and: [{ courseNum, groupNum }],
    });
    return docs.map((doc) => this.toDomain(doc));
  }

  async findAllUniqueCourseNums(): Promise<Student[]> {
    const docs = await this.model.find({});
    return lodash
      .uniqBy(docs, 'courseNum')
      .map((doc: VhStudentDocument) => this.toDomain(doc));
  }

  async findGroupNumsForCourse(courseNum: number): Promise<Student[]> {
    const docs = await this.model.find({ courseNum });
    return lodash
      .uniqBy(docs, 'groupNum')
      .map((doc: VhStudentDocument) => this.toDomain(doc));
  }

  private toDomain(doc: VhStudentDocument): Student {
    return {
      _id: doc._id.toString(),
      ID: doc.ID,
      courseNum: doc.courseNum,
      groupNum: doc.groupNum,
      Answers1: doc.Answers1,
      Answers2: doc.Answers2,
      correctAperdif1: doc.correctAperdif1,
      correctAperdif2: doc.correctAperdif2,
      date: doc.date,
    };
  }
}
