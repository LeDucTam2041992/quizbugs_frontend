import {IUser} from "./IUser";
import {Exam} from "./exam";
import {UserAnswer} from "./user-answer";

export interface UserExam{
    id?: number,
    user?: any,
    exam?: any,
    date?: any,
    mark?: any,
    userAnswers?: any[]
}
