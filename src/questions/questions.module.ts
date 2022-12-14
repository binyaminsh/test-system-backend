import { forwardRef, Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from 'src/schemas/question.schema';
import { QuestionsRepository } from './questions.repository';
import { TestsModule } from 'src/tests/tests.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }]),
    forwardRef(() => TestsModule) ,
  ],
  providers: [QuestionsService, QuestionsRepository],
  controllers: [QuestionsController],
  exports: [QuestionsService, QuestionsRepository],
})
export class QuestionsModule {}
