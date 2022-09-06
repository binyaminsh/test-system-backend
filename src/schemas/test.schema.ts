import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Delivery } from './delivery.schema';
import { Question } from './question.schema';
import { Topic } from './topic.scheme';

export type TestDocument = Test & Document;

@Schema({ timestamps: true })
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

  @Prop()
  delivery: Delivery;
}

export const TestSchema = SchemaFactory.createForClass(Test);