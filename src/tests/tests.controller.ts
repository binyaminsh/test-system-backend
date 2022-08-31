import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { TestsService } from './tests.service';

@Controller('tests')
export class TestsController {
  constructor(private readonly testService: TestsService) {}

  @Get()
  async getAll() {
    return await this.testService.getAll();
  }
  @Post()
  async create(@Body() createTestDto: CreateTestDto) {
    return await this.testService.create(createTestDto);
  }
}
