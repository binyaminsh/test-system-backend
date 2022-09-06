import { Injectable } from '@nestjs/common';
import { CompletedTestsRepository } from './completed-tests.repository';
import { CreateCompletedTestDto } from './dto/create-completed-tests.dto';
import { UpdateCompletedTestDto } from './dto/update-completed-test.dto';

@Injectable()
export class CompletedTestsService {
    constructor(private readonly completedTestRepository: CompletedTestsRepository) {}

    async findAll() {
        return await this.completedTestRepository.findAll();
    }

    async create(createCompletedTestDto: CreateCompletedTestDto) {
        return await this.completedTestRepository.create(createCompletedTestDto);
    }

    async update(id: string, updateCompletedTestDto: UpdateCompletedTestDto) {
        return await this.completedTestRepository.update(id, updateCompletedTestDto);
    }

    async delete(id: string) {
        return await this.completedTestRepository.delete(id);
    }
}
