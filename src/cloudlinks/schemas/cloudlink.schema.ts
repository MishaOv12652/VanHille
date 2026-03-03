import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CloudLinkDocument = CloudLink & Document;

@Schema({ collection: 'CloudLinks' })
export class CloudLink {
  @Prop({ type: String, unique: true })
  tableId: string;

  @Prop({ type: Object })
  settings_obj: Record<string, any>;

  @Prop({ type: Array })
  data: any[];
}

export const CloudLinkSchema = SchemaFactory.createForClass(CloudLink);
CloudLinkSchema.index({ tableId: 1 }, { unique: true });
