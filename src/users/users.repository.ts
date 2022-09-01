import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    try {
      const user = new this.userModel(createUserDto);
      return user.save();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id }).exec();
  }
  async findByUsername(username: string): Promise<UserDocument | null> {
    return await this.userModel.findOne({ username }).exec();
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.userModel
        .updateOne({ _id: id }, { $set: { ...updateUserDto } })
        .exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async remove(id: string) {
    try {
      return await this.userModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
