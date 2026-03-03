import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema({ collection: 'Questions' })
export class Question {
  @Prop({ type: Number })
  Qid: number;

  @Prop({ type: String })
  Question: string;

  @Prop({ type: [] })
  Answers: any[];

  @Prop({ type: Number })
  correctA: number;

  @Prop({ type: Number })
  dif: number;

  @Prop({ type: String })
  Image: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
