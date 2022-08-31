import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswerSchema } from 'src/schemas/answer.schema';
import { AnswersService } from './answers.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Answer', schema: AnswerSchema }]),
  ],
  providers: [AnswersService],
  exports: [AnswersService],
})
export class AnswersModule {}
