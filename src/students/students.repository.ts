import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { StudentDocument } from "src/schemas/student.schema";
import { CreateStudentDto } from "./dto/create-student.dto";


@Injectable()
export class StudentsRepository {
    constructor(@InjectModel('Student') private studentModel: Model<StudentDocument>){}

    async findAll() {
        return await this.studentModel.find().exec();
    }

    async create(createStudentDto: CreateStudentDto) {
       return new this.studentModel(createStudentDto).save();
    }
}