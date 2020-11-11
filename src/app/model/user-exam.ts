import {IUser} from "./IUser";
import {Exam} from "./exam";

export interface UserExam{
    id?: number,
    user: IUser,
    exam: Exam,
    date: any,
    mark: any,
    userAnswers: any
}
