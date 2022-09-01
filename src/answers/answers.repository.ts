import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnswerDocument } from 'src/schemas/answer.schema';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswersRepository {
  constructor(
    @InjectModel('Answer') private readonly answerModel: Model<AnswerDocument>,
  ) {}

  async create(createAnswerDto: CreateAnswerDto) {
    try {
      const answer = new this.answerModel(createAnswerDto);
      await answer.save();
      return answer;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async findOne(id: number) {
    return await this.answerModel.findOne({ id });
  }
}
