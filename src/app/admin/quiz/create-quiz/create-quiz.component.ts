import {Component, OnInit, ViewChild} from '@angular/core';
import {Question} from '../../../model/question';
import {QuestionService} from '../../../service/question.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  listQuestions: Question[];
  filterQuestion: Question[];
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;

  quizQuestion: Question[] = [];

  quizFormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    this.questionService.getAllQuestion().subscribe(list => {
          const array = list.map(item => {
            return {
              id: item.id,
              question: item.question,
              type: item.type,
              status: item.status,
              categories: item.categories,
              answers: item.answers
            };
          });
          this.listQuestions = array;
          this.length = this.listQuestions.length;
          this.setData();
        }
    );
  }

  delete(id): void {
    if (confirm('Are you sure want to delete?')) {
      this.questionService.deleteQuestion(id).subscribe(() => {
        this.getAll();
      });
    }
  }

  add(id): void{
    this.listQuestions.forEach(q => {
      if(q.id == id) {
        this.quizQuestion.push(q);
      }
    })
  }

  remove(id): void{
    this.quizQuestion.forEach(q => {
      if(q.id == id) {
        this.quizQuestion.splice(this.quizQuestion.indexOf(q),1);
      }
    })
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  setData(): void{
    this.filterQuestion = [];
    let page = this.pageEvent.pageIndex-1;
    let size = this.pageEvent.pageSize;
    let fQuestion = page*size;
    while (fQuestion<this.length && this.filterQuestion.length<size) {
      this.filterQuestion.push(this.listQuestions[fQuestion]);
      fQuestion++
    }
  }
}
