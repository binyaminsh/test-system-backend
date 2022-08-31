/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Topic, TopicDocument } from 'src/schemas/topic.scheme';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
@Injectable()
export class TopicsService {
  constructor(
    @InjectModel(Topic.name) private topicModel: Model<TopicDocument>,
  ) {}

  async create(createTopicDto: CreateTopicDto) {
    try {
      return new this.topicModel(createTopicDto).save();
    } catch (error) {
      throw new Error('something went wrong');
    }
  }

  async findAll() {
    try {
      return this.topicModel.find().select({ __v: 0}).populate({path: 'companies', select: ['_id', 'name']})
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAllByAccount(accountId: string){
    const topics = await this.topicModel.find({companies: accountId}).select({ _id: 1, name: 1})
    
    return topics;
  }

  async findOne(id: string) {
    try {
      return this.topicModel.findOne({ _id: id });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(id: string, updateTopicDto: UpdateTopicDto) {
    try {
      return this.topicModel.updateOne(
        { _id: id },
        { $set: { ...updateTopicDto } },
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async remove(id: string) {
    try {
      return this.topicModel.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
