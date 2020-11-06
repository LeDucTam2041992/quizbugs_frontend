import {ICategory} from "./ICategory";

export interface Question {
  id: number,
  question: string,
  type: number,
  status: number,
  category: ICategory,
  answers: any
}
