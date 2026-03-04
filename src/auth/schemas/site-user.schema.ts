import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SiteUserDocument = SiteUser & Document;

@Schema({ collection: 'SiteUser' })
export class SiteUser {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: String, enum: ['admin', 'educator', 'student'], default: 'student' })
  role: string;
}

export const SiteUserSchema = SchemaFactory.createForClass(SiteUser);
