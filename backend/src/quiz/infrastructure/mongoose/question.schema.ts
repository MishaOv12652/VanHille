import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'Questions' })
export class QuestionDocument extends Document {
  @Prop({ type: Number })
  Qid: number;

  @Prop({ type: String })
  Question: string;

  @Prop({ type: [] })
  Answers: unknown[];

  @Prop({ type: Number })
  correctA: number;

  @Prop({ type: Number })
  dif: number;

  @Prop({ type: String })
  Image: string;
}

export const QuestionSchema = SchemaFactory.createForClass(QuestionDocument);
