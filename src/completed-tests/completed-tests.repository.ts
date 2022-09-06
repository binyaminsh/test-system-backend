import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CompletedTestDocument } from 'src/schemas/completedTest.schema';
import { CreateCompletedTestDto } from './dto/create-completed-tests.dto';
import { UpdateCompletedTestDto } from './dto/update-completed-test.dto';

@Injectable()
export class CompletedTestsRepository {
  constructor(
    @InjectModel('CompletedTest')
    private completedTestModel: Model<CompletedTestDocument>,
  ) {}

  async findAll() {
    return await this.completedTestModel.find().exec();
  }

  async create(createCompletedTestDto: CreateCompletedTestDto) {
    const completedTest = new this.completedTestModel(createCompletedTestDto);
    return await completedTest.save();
  }

  async update(id: string, updateCompletedTestDto: UpdateCompletedTestDto) {
    return await this.completedTestModel
      .findByIdAndUpdate(id, updateCompletedTestDto, { new: true })
      .exec();
  }

  async delete(id: string) {
    return await this.completedTestModel.findByIdAndDelete(id).exec();
  }
}
