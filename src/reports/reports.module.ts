import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { CompletedTestsModule } from 'src/completed-tests/completed-tests.module';

@Module({
  imports: [CompletedTestsModule],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
