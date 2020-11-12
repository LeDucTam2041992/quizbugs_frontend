import {ICategory} from './ICategory';

export interface Question {
  id: number,
  question: string,
  type: number,
  enabled: boolean,
  categories: any,
  answers: any
}
