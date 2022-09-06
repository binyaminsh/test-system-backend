import { Module } from '@nestjs/common';
import { CompletedTestsService } from './completed-tests.service';
import { CompletedTestsController } from './completed-tests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompletedTestSchema } from 'src/schemas/completedTest.schema';
import { CompletedTestsRepository } from './completed-tests.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: ('CompletedTest'), schema: CompletedTestSchema}])],
  controllers: [CompletedTestsController],
  providers: [CompletedTestsService, CompletedTestsRepository],
  exports: [CompletedTestsRepository]
})
export class CompletedTestsModule {}
