/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ReturnUserDto } from 'src/users/dto/return-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async register(user: CreateUserDto): Promise<ReturnUserDto | null>{
        const { username, password } = user;
        
        const existingUser = await this.usersService.findByUsername(username);

        if(existingUser) return null;

        const hashedPassword = await this.hashPassword(password);

        const newUser = await this.usersService.create({ username, password: hashedPassword});

        return { id: newUser.id, username: newUser.username};
  }

  async checkPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  async validateUser(username: string, password: string): Promise<ReturnUserDto | null>{
    const user = await this.usersService.findByUsername(username);

    if(!user) return null;

    const doesPasswordMatch = await this.checkPassword(password, user.password);

    if(!doesPasswordMatch) return null;

    return { id: user.id, username};
  }

  async login(existingUser: CreateUserDto): Promise<{token: string} | null>{
        const { username, password } = existingUser;

        const user = await this.validateUser(username, password);

        if(!user) return null;

        const token = await this.jwtService.signAsync({user});

        return { token };
  }
}
