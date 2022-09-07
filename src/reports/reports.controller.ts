import { Controller, Get, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('/byTest')
  async findByTest(@Query() query: {testId: string, startDate: Date, endDate: Date, anyDate:boolean }) {
    return await this.reportsService.findByTest(query.testId, query.startDate, query.endDate, query.anyDate)
  }
  @Get('/byStudent')
  async findAllByStudent(@Query() studentId: string) {
    return await this.reportsService.findAllByStudent(studentId);
  }
}
