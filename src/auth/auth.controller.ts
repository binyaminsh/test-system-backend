/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { STATUS_CODES } from 'http';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ReturnUserDto } from 'src/users/dto/return-user.dto';
import { AuthService } from './auth.service';
import { AllowAnon } from './guards/allowAnon.decorator';

@AllowAnon()
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() user: CreateUserDto): Promise<ReturnUserDto | null> {
    return this.authService.register(user);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() user: CreateUserDto): Promise<{ token } | any> {
    const token = await this.authService.login(user);
    if (token) return token;

    throw new HttpException(
      'username or password are incorrect',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
