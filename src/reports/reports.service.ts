import { Injectable } from '@nestjs/common';
import { CompletedTestsRepository } from 'src/completed-tests/completed-tests.repository';
import { resourceLimits } from 'worker_threads';

@Injectable()
export class ReportsService {
  constructor(
    private readonly completedTestsRepository: CompletedTestsRepository,
  ) {}

  async findByTest(
    testId: string,
    startDate: Date,
    endDate: Date,
    anyDate: boolean,
  ) {
    try {
      const tests = await this.completedTestsRepository.findAll();
      let result = tests.filter(
        (test) => test._id.toString() === testId,
      );
      if (!anyDate) {
        result = result.filter(
          (test) =>
            new Date(test.date).getTime() >= new Date(startDate).getTime() &&
            new Date(test.date).getTime() <= new Date(endDate).getTime(),
        );
      }

      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAllByStudent(studentId: string) {
    const tests = await this.completedTestsRepository.findAll();
    return tests.filter((test) => test.studentId.toString() === studentId);
  }
}
