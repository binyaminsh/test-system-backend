import { Injectable } from '@nestjs/common';
import { QuestionsRepository } from 'src/questions/questions.repository';
import { CreateTestDto } from './dto/create-test.dto';
import { TestsRepository } from './tests.repository';

@Injectable()
export class TestsService {
  constructor(
    private readonly testsRepository: TestsRepository,
    private readonly questionsRepository: QuestionsRepository,
  ) {}

  async create(createTestDto: CreateTestDto) {
    try {
      const test = await this.testsRepository.create(createTestDto);

      //update tests reference on each question
      const updatedQuestions = await Promise.all(
        test.questions.map(async (question) => {
          return await this.questionsRepository.updateTests(question, test._id);
        }),
      );
      return test;
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getAll() {
    return await this.testsRepository.getAll();
  }

  async findAllByQuestionId(id: string) {
    return await this.testsRepository.findAllByQuestionId(id);
  }

  async delete(id: string) {
    try {
      // delete tests references from questions
      const questions = await this.questionsRepository.findAllByTest(id);
      questions.forEach(async (question) => {
        const filteredTests = question.tests.filter((test) => {
          return test.toString() !== id;
        });
        question.tests = [...filteredTests];
        await question.save();
      });
      return await this.testsRepository.delete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
