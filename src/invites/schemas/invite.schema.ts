import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InviteDocument = Invite & Document;

@Schema({ collection: 'Invites' })
export class Invite {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true, unique: true })
  token: string;

  @Prop({ type: String, required: true })
  groupId: string;

  @Prop({ type: String, required: true })
  role: string;

  @Prop({ type: String, required: true })
  invitedBy: string;

  @Prop({ type: Date, required: true })
  expiresAt: Date;

  @Prop({ type: Boolean, default: false })
  used: boolean;
}

export const InviteSchema = SchemaFactory.createForClass(Invite);
