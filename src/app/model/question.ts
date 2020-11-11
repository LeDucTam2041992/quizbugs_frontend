import {ICategory} from './ICategory';
import {Answer} from "./answer";

export interface Question {
  id: number,
  question: string,
  type: number,
  enabled: boolean,
  categories: ICategory[],
  answers: Answer[],
}
