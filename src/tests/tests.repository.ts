import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestDocument } from 'src/schemas/test.schema';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestsRepository {
  constructor(@InjectModel('Test') private testModel: Model<TestDocument>) {}

  async create(createTestDto: CreateTestDto) {
    try {
      const test = new this.testModel(createTestDto);
      return await test.save();
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getAll() {
    return await this.testModel
      .find()
      .select({ __v: 0 })
      .populate('topic', 'name')
      //.populate('questions')
      .exec();
  }

  async findAllByQuestionId(id: string) {
    return await this.testModel.find({"questions": id }).exec();
  }

  async delete(id: string) {
    try {
      return await this.testModel.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async update(id: string, updateTestDto: UpdateTestDto) {
    return await this.testModel.findByIdAndUpdate(id, updateTestDto).exec();
  }

  async findAllByTopic(topicId: string) {
    const tests = await this.testModel.find({topic: topicId}).exec();
    console.log(tests.length)
    return await this.testModel.find({topic: topicId}).exec();
  }
}
