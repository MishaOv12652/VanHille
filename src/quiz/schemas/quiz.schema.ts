import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema({ collection: 'VanHileQuizRes' })
export class Quiz {
  @Prop({ type: Date, default: Date.now })
  date: Date;

  @Prop({ type: [] })
  results: any[];

  @Prop({ type: Number })
  courseNum: number;

  @Prop({ type: Number })
  groupNum: number;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
