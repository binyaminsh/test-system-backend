/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Answer } from './answer.schema';
import { Topic } from './topic.scheme';
import mongoose, { Document } from 'mongoose';


export type QuestionDocument = Question & Document;

@Schema()
export class Question {

  @Prop({ required: true })
  content: string;

  @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' }] })
  topicsId: Topic[]

  @Prop({ required: true })
  type: string;

  @Prop()
  lowerContent: string;

  @Prop({ required: true, type: [{type: mongoose.Types.ObjectId, ref: 'Answer'}]})
  answers: Answer[]

  @Prop({ required: true })
  tags: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);