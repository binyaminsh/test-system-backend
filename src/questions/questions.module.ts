import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from 'src/schemas/question.schema';
import { AnswersModule } from 'src/answers/answers.module';
import { Topic } from 'src/schemas/topic.scheme';
import { TopicsModule } from 'src/topics/topics.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }]),
    AnswersModule,
    TopicsModule,
  ],
  providers: [QuestionsService],
  controllers: [QuestionsController],
})
export class QuestionsModule {}
