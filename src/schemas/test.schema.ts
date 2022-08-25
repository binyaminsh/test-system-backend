/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Delivery } from './deliver.schema';
import { Question } from './question.schema';
import { Topic } from './topic.scheme';

export type TestDocument = Test & Document;

@Schema()
export class Test {
  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Topic'})
  topic: Topic;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  passMessage: string;

  @Prop({ required: true })
  failMessage: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  showResult: boolean;

  @Prop({ required: true })
  passingGrade: number;

  @Prop({ required: true })
  header: string;

  @Prop({ required: true, type: [{type: mongoose.Types.ObjectId, ref: 'Question'}]})
  questions: Question[];

  @Prop({ required: true })
  date: Date;

  @Prop()
  delivery: Delivery;
}

export const TestSchema = SchemaFactory.createForClass(Test);