import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as moment from 'moment';

@Schema({ collection: 'VanHileQuizRes' })
export class QuizResultDocument extends Document {
  // NB: evaluated once at schema-definition time, matching the legacy
  // `default: moment().utc(new Date())` behavior (see migration plan).
  // `.utc(new Date())` coerces the Date to a truthy keepLocalTime flag
  // (verified equivalent to `.utc(true)`), not an actual UTC conversion.
  @Prop({ type: Date, default: moment().utc(true) })
  date: Date;

  @Prop({ type: [] })
  results: number[];

  @Prop({ type: Number })
  courseNum: number;

  @Prop({ type: Number })
  groupNum: number;
}

export const QuizResultSchema =
  SchemaFactory.createForClass(QuizResultDocument);
