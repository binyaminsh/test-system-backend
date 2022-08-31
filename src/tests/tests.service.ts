import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TestDocument } from 'src/schemas/test.schema';
import { CreateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestsService {
  constructor(@InjectModel('Test') private testModel: Model<TestDocument>) {}

  async create(createTestDto: CreateTestDto) {
    const test = new this.testModel(createTestDto);
    return await test.save();
  }

  async getAll() {
    return await this.testModel
      .find()
      .select({ __v: 0 })
      .populate('topic', 'name')
      //.populate('questions')
      .exec();
  }
}
