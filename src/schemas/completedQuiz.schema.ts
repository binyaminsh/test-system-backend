/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date } from 'mongoose';
import { Student } from './student.schema';
import { StudentAnswers } from './studentAnswers.schema';
import { Test } from './test.schema';


export type AnswerDocument = Answer & Document;

@Schema()
export class Answer {

  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Test'})
  testId: Test;

  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Student'})
  studentId: Student;

  @Prop({ required: true })
  studentAnswers: StudentAnswers[];

  @Prop({ required: true })
  score: number;

  @Prop({ required: true })
  date: Date
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);