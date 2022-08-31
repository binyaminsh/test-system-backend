/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionDocument } from '../schemas/question.schema';
import { AnswersService } from 'src/answers/answers.service';
import { TopicsService } from 'src/topics/topics.service';
import { Answer } from 'src/schemas/answer.schema';
@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel('Question')
    private readonly questionModel: Model<QuestionDocument>,
    private readonly answerService: AnswersService,
    private readonly topicsService: TopicsService
  ) {}
  async create(createQuestionDto: CreateQuestionDto) {
    try {

      const answers: Answer[] = await 
      Promise.all( createQuestionDto.answers.map(async (answer): Promise<Answer> => {
          return await this.answerService.create(answer);
      }))


      createQuestionDto.answers = [...answers];
      const question = new this.questionModel(createQuestionDto);
     
      return await question.save();
    } catch (error) {
      throw Error(error.message)
    }
  }

  async getAllByTopic(topicId: string) {
    if(topicId.trim() !== '')
    return await this.questionModel
    .find({ topicId: topicId })
    .select({ __v: 0, answers: { __v: 0}})
    .populate({ path: 'topicId', select: 'name'})
    .exec();

  }
}
