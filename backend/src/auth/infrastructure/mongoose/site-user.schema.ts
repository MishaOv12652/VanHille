import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'SiteUser' })
export class SiteUserDocument extends Document {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const SiteUserSchema = SchemaFactory.createForClass(SiteUserDocument);
