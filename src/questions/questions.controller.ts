import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto) {
    try {
      return await this.questionsService.create(createQuestionDto);
    } catch (error) {
      throw Error(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    try {
      return await this.questionsService.update(id, updateQuestionDto);
    } catch (error) {
      throw Error(error.message);
    }
  }

  @Get()
  async getAllByTopic(@Query('topicId') topicId: string) {
    return await this.questionsService.getAllByTopic(topicId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const removedQuestion = await this.questionsService.remove(id);

    return removedQuestion;
  }
}
