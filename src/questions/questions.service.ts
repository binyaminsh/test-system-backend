import { Injectable } from '@nestjs/common';
import mongoose from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from '../schemas/question.schema';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionsRepository } from './questions.repository';
import { AnswersRepository } from 'src/answers/answers.repository';
import { Answer } from 'src/schemas/answer.schema';
@Injectable()
export class QuestionsService {
  constructor(
    private readonly questionsRepository: QuestionsRepository,
    private readonly answersRepository: AnswersRepository,
  ) {}
  async create(createQuestionDto: CreateQuestionDto) {
    try {
      const answers: Answer[] = await Promise.all(
        createQuestionDto.answers.map(async (answer): Promise<Answer> => {
          return await this.answersRepository.create(answer);
        }),
      );
      createQuestionDto.answers = [...answers];

      const question = await this.questionsRepository.create(createQuestionDto);

      return question;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getAllByTopic(topicId: string) {
    return await this.questionsRepository.getAllByTopic(topicId);
  }

  async findOneById(_id: string) {
    return await this.questionsRepository.findOneById(_id);
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    try {
      return await this.questionsRepository.update(id, updateQuestionDto);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async remove(id: string) {
    try {
      return await this.questionsRepository.remove(id);
    } catch (error) {
      throw Error(error.message);
    }
  }
  async updateTests(_id: Question, test: mongoose.Types.ObjectId) {
    try {
      return await this.questionsRepository.updateTests(_id, test);
    } catch (error) {
      throw Error(error.message);
    }
  }
}
