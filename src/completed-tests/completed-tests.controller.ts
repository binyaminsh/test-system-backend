import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CompletedTestsService } from './completed-tests.service';
import { CreateCompletedTestDto } from './dto/create-completed-tests.dto';
import { UpdateCompletedTestDto } from './dto/update-completed-test.dto';

@Controller('completed-tests')
export class CompletedTestsController {
  constructor(private readonly completedTestsService: CompletedTestsService) {}

  @Get()
  async findAll() {
    return await this.completedTestsService.findAll();
  }

  @Post()
  async create(@Body() createCompletedTestDto: CreateCompletedTestDto) {
    try {
      return await this.completedTestsService.create(createCompletedTestDto);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, updateCompletedTestDto: UpdateCompletedTestDto) {
    try {
      return await this.completedTestsService.update(id, updateCompletedTestDto);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.completedTestsService.delete(id);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
