import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswerSchema } from 'src/schemas/answer.schema';
import { AnswersRepository } from './answers.repository';
import { AnswersService } from './answers.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Answer', schema: AnswerSchema }]),
  ],
  providers: [AnswersService, AnswersRepository],
  exports: [AnswersService, AnswersRepository],
})
export class AnswersModule {}
