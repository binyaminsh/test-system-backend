import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Question, QuestionDocument } from 'src/schemas/question.schema';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsRepository {
  constructor(
    @InjectModel('Question')
    private readonly questionModel: Model<QuestionDocument>,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    try {
      const question = await this.questionModel.create(createQuestionDto);
      return await question.save();
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getAllByTopic(topicId: string) {
    if (topicId.trim() !== '') {
      return await this.questionModel
        .find({ topicId: topicId })
        .select({ __v: 0, answers: { __v: 0 } })
        .populate({ path: 'topicId', select: 'name' })
        .exec();
    }
  }

  async findOneById(_id: string) {
    return await this.questionModel.findOne({ _id }).exec();
  }

  async update(id: string, updateQuestionDto: UpdateQuestionDto) {
    try {
      return await this.questionModel
        .updateOne({ _id: id }, updateQuestionDto)
        .exec();
    } catch (error) {
      throw Error(error.message);
    }
  }
  async remove(id: string) {
    try {
      return this.questionModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw Error(error.message);
    }
  }
  async updateTests(_id: Question, test: mongoose.Types.ObjectId) {
    try {
      return await this.questionModel
        .findOneAndUpdate(
          { _id },
          { $push: { tests: test._id } },
          { new: true },
        )
        .exec();
    } catch (error) {
      throw Error(error.message);
    }
  }
}
