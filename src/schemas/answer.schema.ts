/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AnswerDocument = Answer & Document;

@Schema()
export class Answer {
  @Prop({ required: true })
  id: number;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  isCorrect: boolean;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
