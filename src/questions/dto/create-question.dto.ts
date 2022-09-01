import { Answer } from 'src/schemas/answer.schema';

export class CreateQuestionDto {
  topicId: string;
  content: string;
  lowerContent: string;
  type: string;
  answers: Answer[];
  answersLayout: string;
  tags: string[];
}
