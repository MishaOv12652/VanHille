import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Deliberately duplicates StudentsModule's `VHStudents` collection mapping
// rather than importing its schema/model: QuizModule owns its own narrow
// read port (see IStudentAnswersPort) so the two modules can migrate to
// different persistence backends independently (see migration plan).
@Schema({ collection: 'VHStudents' })
export class QuizStudentDocument extends Document {
  @Prop({ type: Number })
  ID: number;

  @Prop({ type: Number })
  courseNum: number;

  @Prop({ type: Number })
  groupNum: number;

  @Prop({ type: [] })
  Answers1: unknown[];

  @Prop({ type: [] })
  Answers2: unknown[];

  @Prop({ type: [] })
  correctAperdif1: unknown[];

  @Prop({ type: [] })
  correctAperdif2: unknown[];
}

export const QuizStudentSchema =
  SchemaFactory.createForClass(QuizStudentDocument);
