import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsRepository } from './students.repository';

@Injectable()
export class StudentsService {
    constructor(private readonly studentRepository: StudentsRepository){}

    async findAll() {
        return await this.studentRepository.findAll();
    }

    async create(createStudentDto: CreateStudentDto) {
       return await this.studentRepository.create(createStudentDto);
    }
}
