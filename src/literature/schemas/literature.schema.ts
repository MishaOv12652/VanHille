import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LiteratureDocument = LiteratureEntry & Document;

@Schema({ collection: 'Literature' })
export class LiteratureEntry {
  @Prop({ type: String })
  title: string;

  @Prop({ type: String })
  desc: string;

  @Prop({ type: String })
  url: string;

  @Prop({ type: String, enum: ['research', 'educational'] })
  category: string;
}

export const LiteratureSchema = SchemaFactory.createForClass(LiteratureEntry);
