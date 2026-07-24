import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as moment from 'moment';

@Schema({ collection: 'VHStudents' })
export class VhStudentDocument extends Document {
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

  // NB: evaluated once at schema-definition time (module load), same as the
  // legacy `default: moment().utc(new Date())` — intentionally not a
  // function reference, to keep timestamp behavior identical to production.
  // `.utc(new Date())` coerces the Date to a truthy keepLocalTime flag
  // (verified equivalent to `.utc(true)`), not an actual UTC conversion.
  @Prop({ type: Date, default: moment().utc(true) })
  date: Date;
}

export const VhStudentSchema = SchemaFactory.createForClass(VhStudentDocument);
