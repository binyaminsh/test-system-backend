import { Injectable } from '@nestjs/common';
import { CompletedTestsRepository } from 'src/completed-tests/completed-tests.repository';

@Injectable()
export class ReportsService {
  constructor(
    private readonly completedTestsRepository: CompletedTestsRepository,
  ) {}

  async findByTest(testId: string, date: Date) {
    try {
      const tests = await this.completedTestsRepository.findAll();
      const result = tests.filter((test) => test._id.toString() === testId);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAllBystudent(studentId: string) {return}
}
