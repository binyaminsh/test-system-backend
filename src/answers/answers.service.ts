import { Injectable } from '@nestjs/common';
import { AnswersRepository } from './answers.repository';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswersService {
  constructor(private readonly answersRepository: AnswersRepository) {}

  async create(createAnswerDto: CreateAnswerDto) {
    try {
      return await this.answersRepository.create(createAnswerDto);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async findOne(id: number) {
    return await this.answersRepository.findOne(id);
  }
}
