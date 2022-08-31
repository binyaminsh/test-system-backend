import { Delivery } from 'src/schemas/delivery.schema';

/* eslint-disable prettier/prettier */
export class CreateTestDto {
    topic: string;
    type: string;
    name: string;
    header: string;
    language: string;
    passingGrade: number;
    passMessage: string;
    failMessage: string;
    showResult: boolean;
    questions: string[];
    delivery: Delivery
}


//     "passMessage": "pass",
//     "failMessage": "fail",
//     "showResult": true,
//     "questions": ["234234v234v23v"],
//     "delivery": {"from": "me", "cc": "", 
//     "bcc": "", "passMessage": "pass", "failMessage": "fail"}