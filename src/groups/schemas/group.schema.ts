import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GroupDocument = Group & Document;

@Schema({ collection: 'Groups' })
export class Group {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  courseNum: number;

  @Prop({ type: Number, required: true })
  groupNum: number;

  @Prop({ type: String, required: true })
  educatorId: string;

  @Prop({ type: String, unique: true })
  joinCode: string;

  @Prop({ type: Boolean, default: false })
  attempt2Locked: boolean;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
