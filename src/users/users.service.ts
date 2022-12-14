import { Injectable } from '@nestjs/common';
import { User, UserDocument } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    try {
      return await this.userRepository.create(createUserDto);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }
  async findByUsername(username: string): Promise<UserDocument | null> {
    return await this.userRepository.findByUsername(username);
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      return await this.userRepository.update(id, updateUserDto);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async remove(id: string) {
    try {
      return await this.userRepository.remove(id);
    } catch (error) {
      throw Error(error.message);
    }
  }
}
