import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date } from 'mongoose';
import { Student } from './student.schema';
import { StudentAnswers } from './studentAnswers.schema';
import { Test } from './test.schema';


export type CompletedTestDocument = CompletedTest & Document;

@Schema({ timestamps: true })
export class CompletedTest {

  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Test'})
  testId: Test;

  @Prop({ required: true, type: mongoose.Types.ObjectId, ref: 'Student'})
  studentId: Student;

  @Prop({ required: true })
  studentAnswers: StudentAnswers[];

  @Prop({ required: true })
  score: number;

  @Prop({ required: true, type: Date })
  date: Date
}

export const CompletedTestSchema = SchemaFactory.createForClass(CompletedTest);