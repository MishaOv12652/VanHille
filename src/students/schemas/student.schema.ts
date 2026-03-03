import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ collection: 'VHStudents' })
export class Student {
  @Prop({ type: Number })
  ID: number;

  @Prop({ type: Number })
  courseNum: number;

  @Prop({ type: Number })
  groupNum: number;

  @Prop({ type: [] })
  Answers1: any[];

  @Prop({ type: [] })
  Answers2: any[];

  @Prop({ type: [] })
  correctAperdif1: any[];

  @Prop({ type: [] })
  correctAperdif2: any[];

  // Default is a function reference so each new document gets the current time,
  // not the server start time (which was the bug in the original moment().utc() call)
  @Prop({ type: Date, default: Date.now })
  date: Date;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
