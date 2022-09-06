import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testService: TestsService) {}

  @Get()
  async getAll() {
    return await this.testService.getAll();
  }
  @Get('byTopic')
  async findAllByTopic(@Query('topicId') topicId: string) {
    return await this.testService.findAllByTopic(topicId);
  }
  @Post()
  async create(@Body() createTestDto: CreateTestDto) {
    try {
      return await this.testService.create(createTestDto);
    } catch (error) {
      throw Error(error.message);
    }
  }
  @Patch(':id')
  async update(@Param('id') id: string, updateTestDto: UpdateTestDto) {
    return await this.testService.update(id, updateTestDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.testService.delete(id);
  }
}
