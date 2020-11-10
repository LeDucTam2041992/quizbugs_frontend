import {Question} from "./question";

export interface Exam{
    id?: number,
    name: string,
    enabled: boolean,
    questionSet: Question[]
}
