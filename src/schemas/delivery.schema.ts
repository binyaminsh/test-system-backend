import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DeliveryDocument = Delivery & Document;

@Schema()
export class Delivery {
  @Prop({ required: true })
  from: string;

  @Prop()
  cc: string;

  @Prop()
  bcc: string;

  @Prop({ required: true })
  passMessage: string;

  @Prop({ required: true })
  failMessage: string;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);