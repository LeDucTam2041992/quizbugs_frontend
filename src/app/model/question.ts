import {ICategory} from './ICategory';
import {Answer} from "./answer";

export interface Question {
  id: number,
  question: string,
  type: number,
  status: number,
  categories: ICategory[],
  answers: Answer[],
  enabled: boolean
}
