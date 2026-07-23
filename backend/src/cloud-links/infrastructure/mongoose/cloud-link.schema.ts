import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'CloudLinks' })
export class CloudLinkDocument extends Document {
  @Prop({ type: String, unique: true })
  tableId: string;

  @Prop({ type: Object })
  settings_obj: unknown;

  @Prop({ type: Array })
  data: unknown[];
}

export const CloudLinkSchema = SchemaFactory.createForClass(CloudLinkDocument);
