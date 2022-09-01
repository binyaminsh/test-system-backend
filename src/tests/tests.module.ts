import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestSchema } from 'src/schemas/test.schema';
import { QuestionsModule } from 'src/questions/questions.module';
import { TestsRepository } from './tests.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
    QuestionsModule,
  ],
  providers: [TestsService, TestsRepository],
  controllers: [TestsController],
  exports: [TestsRepository],
})
export class TestsModule {}
