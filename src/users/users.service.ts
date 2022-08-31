/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>){}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    try {
      const user = new this.userModel(createUserDto);
      return user.save();
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({_id: id});
  }
  async findByUsername(username: string): Promise<UserDocument | null> {
    return this.userModel.findOne({username}).exec();
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({_id: id}, {$set: {...updateUserDto}});
  }

  async remove(id: string) {
    return this.userModel.deleteOne({_id: id});
  }
}
