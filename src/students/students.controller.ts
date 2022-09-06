import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll() {
    return await this.studentsService.findAll();
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    try {
      return await this.studentsService.create(createStudentDto);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
