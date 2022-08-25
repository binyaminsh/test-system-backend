/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Company } from './company.schema';

export type TopicDocument = Topic & Document;

@Schema()
export class Topic {
    
  @Prop({ required: true })
  name: string;

  @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Company'})
  companyId: Company
}

export const TopicSchema = SchemaFactory.createForClass(Topic);