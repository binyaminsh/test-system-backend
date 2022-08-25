/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Answer } from './answer.schema';
import { Question } from './question.schema';



export type StudentAnswersDocument = StudentAnswers & Document;

@Schema()
export class StudentAnswers {

    @Prop({required: true, type: mongoose.Types.ObjectId, ref: 'Question'})
    questionId: Question
  
    @Prop({required: true})
    answers: Answer[]
}

export const StudentAnswersSchema = SchemaFactory.createForClass(StudentAnswers);