import { Answer } from 'src/schemas/answer.schema';

export class CreateCompletedTestDto {
  testId: string;
  studentId: string;
  studentAnswers: Answer[];
  score: number;
  date: Date;
}
