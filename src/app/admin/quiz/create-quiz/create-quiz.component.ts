import {Component, OnInit} from '@angular/core';
import {Question} from '../../../model/question';
import {QuestionService} from '../../../service/question.service';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material/paginator';
import {FormControl, Validators} from '@angular/forms';
import {ICategory} from '../../../model/ICategory';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  filteredListQuestions: Question[] = [];
  listQuestions: Question[] = [];
  searchListQuestion: Question[] = [];
  listCategories: ICategory[];
  selectedCategory: string;
  selectedType: number;
  questionName: string;

  quizQuestion: Question[] = [];
  numberOfCheckbox = 0;
  numberOfSelect = 0;
  numberOfTrueFalse = 0;
  numberOfInput = 0;

  quizFormControl = new FormControl('', [
    Validators.required,
  ]);
  timeFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private questionService: QuestionService,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAll();
    this.categoryService.getAllCategories().subscribe(list => {
          const array = list.map(item => {
            return {
              id: item.id,
              category: item.category
            };
          });
          this.listCategories = array;
        }
    )
  }
  getAll(): void {
    this.questionService.getAllQuestion().subscribe(list => {
          const array = list.map(item => {
            return {
              id: item.id,
              question: item.question,
              type: item.type,
              enabled: item.enabled,
              categories: item.categories,
              answers: item.answers
            };
          });
          this.listQuestions = array;
          this.searchListQuestion = this.listQuestions;
          this.filteredListQuestions =  this.searchListQuestion.slice(0, 5);
        }
    );
  }

  add(id): void{
    this.listQuestions.forEach(q => {
      if(q.id == id) {
        this.quizQuestion.push(q);
        if(q.type == 0) this.numberOfSelect++;
        if(q.type == 1) this.numberOfCheckbox++;
        if(q.type == 2) this.numberOfTrueFalse++;
        if(q.type == 3) this.numberOfInput++;
      }
    })
  }

  remove(id): void{
    this.quizQuestion.forEach(q => {
      if(q.id == id) {
        this.quizQuestion.splice(this.quizQuestion.indexOf(q),1);
        if(q.type == 0) this.numberOfSelect--;
        if(q.type == 1) this.numberOfCheckbox--;
        if(q.type == 2) this.numberOfTrueFalse--;
        if(q.type == 3) this.numberOfInput--;
      }
    })
  }

  SearchTextBox() {
    this.searchListQuestion = this.listQuestions.filter(res => {
      if (res.question.toLowerCase().match(this.questionName.toLowerCase())) {
        if (this.selectedCategory && this.selectedType) {
          for (let i in res.categories) {
            if (res.categories[i].category === this.selectedCategory && res.type == this.selectedType)
              return true
          }
          return false;
        } else if (this.selectedCategory && !this.selectedType) {
          for (let i in res.categories) {
            if (res.categories[i].category === this.selectedCategory)
              return true
          }
          return false;
        } else if (!this.selectedCategory && this.selectedType) {
          return res.type == this.selectedType
        }
        return true;
      }
      return false;
    });
    this.filteredListQuestions =  this.searchListQuestion.slice(0, 5);
  }

  clear() {
    this.questionName = '';
    this.searchCategory();
  }

  searchCategory() {
    if (!this.selectedCategory) {
      if (!this.selectedType) {
        this.searchListQuestion = this.listQuestions;
        this.filteredListQuestions = this.searchListQuestion.slice(0, 5);
      }
      else
        this.searchTypeQuestion();
    } else {
      this.questionName = '';
      this.searchListQuestion = this.listQuestions.filter(res => {
        if (!this.selectedType) {
          for (let i in res.categories) {
            if (res.categories[i].category === this.selectedCategory)
              return true
          }
          return false;
        } else {
          for (let i in res.categories) {
            if (res.categories[i].category === this.selectedCategory && res.type == this.selectedType)
              return true
          }
          return false;
        }
      });
      this.filteredListQuestions =  this.searchListQuestion.slice(0, 5);
    }
  }

  searchTypeQuestion() {
    if (!this.selectedType) {
      if (!this.selectedCategory){
        this.searchListQuestion = this.listQuestions;
        this.filteredListQuestions =  this.searchListQuestion.slice(0, 5);
      } else
        this.searchCategory()
    } else {
      this.searchListQuestion = this.listQuestions.filter(res => {
        if (!this.selectedCategory)
          return res.type == this.selectedType
        else {
          for (let i in res.categories) {
            if (res.categories[i].category === this.selectedCategory && res.type == this.selectedType)
              return true
          }
          return false;
        }
      });
      this.filteredListQuestions =  this.searchListQuestion.slice(0, 5);
    }
  }

  onPageChange($event) {
    this.filteredListQuestions =  this.searchListQuestion.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }

  createQuiz() {

  }

  delete($event: any) {

  }
}
