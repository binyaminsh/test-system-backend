import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Answer } from './answer.schema';
import { Topic } from './topic.scheme';
import mongoose, { Document } from 'mongoose';
import { Test } from './test.schema';


export type QuestionDocument = Question & Document;

@Schema({ timestamps: true })
export class Question {

  @Prop({ required: true })
  content: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Topic' })
  topicId: Topic

  @Prop({ required: true })
  type: string;

  @Prop()
  lowerContent: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Test' }]})
  tests: Test[]

  @Prop({ required: true })
  answers: Answer[]

  @Prop({ required: true })
  answersLayout: string;

  @Prop({ required: true })
  tags: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);