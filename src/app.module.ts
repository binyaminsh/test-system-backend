import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CompaniesModule } from './companies/companies.module';
import { TopicsModule } from './topics/topics.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from './auth/guards/jwt.guard';
import { QuestionsModule } from './questions/questions.module';
import { TestsModule } from './tests/tests.module';
import { StudentsModule } from './students/students.module';
import { CompletedTestsModule } from './completed-tests/completed-tests.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test-system-db'),
    CompaniesModule,
    TopicsModule,
    AuthModule,
    QuestionsModule,
    TestsModule,
    StudentsModule,
    CompletedTestsModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtGuard }],
})
export class AppModule {}
