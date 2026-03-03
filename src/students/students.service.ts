import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { uniqBy } from 'lodash';
import { subHours } from 'date-fns';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async getUserById(id: string): Promise<StudentDocument[]> {
    return this.studentModel.find({ ID: id });
  }

  async addUser(data: {
    ID: number;
    groupNum: number;
    courseNum: number;
  }): Promise<StudentDocument> {
    const created = new this.studentModel({
      ...data,
      Answers1: [],
      Answers2: [],
      correctAperdif1: [],
      correctAperdif2: [],
    });
    return created.save();
  }

  async updateGroupNumOfUser(
    id: string,
    groupNum: string,
  ): Promise<StudentDocument | null> {
    return this.studentModel.findOneAndUpdate(
      { ID: id },
      { groupNum, date: new Date() },
      { new: true },
    );
  }

  async saveUserAns(
    id: string,
    ansNum: string,
    qnumber: string,
    tryNum: string,
  ): Promise<StudentDocument | null> {
    const qIndex = (parseInt(qnumber, 10) - 1).toString();
    const fieldPath = `Answers${tryNum}.${qIndex}`;
    const setter: Record<string, any> = {};
    setter[fieldPath] = ansNum;
    return this.studentModel.findOneAndUpdate(
      { ID: id },
      { $set: setter },
      { new: true },
    );
  }

  async getAllUsersDoneTheQuizInTheLastThreeHours(): Promise<StudentDocument[]> {
    const threeHoursAgo = subHours(new Date(), 3).getTime();
    return this.studentModel.find({ date: { $gte: threeHoursAgo } });
  }

  async saveCorrectAnsArrPerDiff(
    tryNum: string,
    id: string,
    arr: string[],
  ): Promise<StudentDocument | null> {
    const fieldPath = `correctAperdif${tryNum}`;
    const setter: Record<string, any> = {};
    setter[fieldPath] = arr;
    return this.studentModel.findOneAndUpdate(
      { ID: id },
      { $set: setter },
      { new: true },
    );
  }

  async nulifyAnswersIfClosedBrowser(
    id: string,
    tryTime: string,
  ): Promise<StudentDocument | null> {
    const update =
      tryTime === '1' ? { Answers1: [] } : { Answers2: [] };
    return this.studentModel.findOneAndUpdate({ ID: id }, update, {
      new: true,
    });
  }

  async findStudentsBetweenDates(
    sDate: string,
    fDate: string,
  ): Promise<StudentDocument[]> {
    const start = new Date(parseFloat(sDate));
    const end = new Date(parseFloat(fDate));
    return this.studentModel.find({
      $and: [{ date: { $gte: start } }, { date: { $lte: end } }],
    });
  }

  async getStudentsByCourseAndGroupNum(
    courseNum: string,
    groupNum: string,
  ): Promise<StudentDocument[]> {
    return this.studentModel.find({
      courseNum: parseFloat(courseNum),
      groupNum: parseFloat(groupNum),
    });
  }

  async getAllUniqueCourseNum(): Promise<StudentDocument[]> {
    const results = await this.studentModel.find({});
    if (results.length === 0) return [];
    return uniqBy(results, 'courseNum');
  }

  async getCorrespondingGroupNums(courseNum: string): Promise<StudentDocument[]> {
    const results = await this.studentModel.find({ courseNum });
    if (results.length === 0) return [];
    return uniqBy(results, 'groupNum');
  }
}
