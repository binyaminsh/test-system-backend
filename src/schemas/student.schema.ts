/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';



export type StudentDocument = Student & Document;

@Schema()
export class Student {

    @Prop({required: true})
    firstName: string;

    @Prop({required: true})
    lastName: string;
  
    @Prop({required: true})
    email: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);