import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AnswerDocument } from 'src/schemas/answer.schema';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel('Answer') private readonly answerModel: Model<AnswerDocument>,
  ) {}

  async create(createAnswerDto: CreateAnswerDto) {
    const answer = new this.answerModel(createAnswerDto);
    await answer.save();
    return answer;
  }

  async findOne(id: number) {
    return await this.answerModel.findOne({ id });
  }
}
