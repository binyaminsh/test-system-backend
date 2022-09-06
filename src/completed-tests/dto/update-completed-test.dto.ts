import { PartialType } from "@nestjs/mapped-types";
import { CreateCompletedTestDto } from "./create-completed-tests.dto";

export class UpdateCompletedTestDto extends PartialType(CreateCompletedTestDto) {}