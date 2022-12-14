/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Topic, TopicSchema } from 'src/schemas/topic.scheme';

@Module({
  imports: [MongooseModule.forFeature([{ name: Topic.name, schema: TopicSchema }])],
  controllers: [TopicsController],
  providers: [TopicsService],
  exports: [TopicsService],
})
export class TopicsModule {}
