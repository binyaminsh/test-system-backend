import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from 'src/schemas/question.schema';
import { AnswersModule } from 'src/answers/answers.module';
import { QuestionsRepository } from './questions.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }]),
    AnswersModule,
  ],
  providers: [QuestionsService, QuestionsRepository],
  controllers: [QuestionsController],
  exports: [QuestionsService, QuestionsRepository],
})
export class QuestionsModule {}
