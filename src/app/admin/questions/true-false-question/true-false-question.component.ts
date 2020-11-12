import { Component, OnInit } from '@angular/core';
import {Answer} from '../../../model/answer';
import {Question} from '../../../model/question';
import {ICategory} from '../../../model/ICategory';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../../service/question.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {SuccessDialogComponent} from '../success-dialog/success-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.scss']
})
export class TrueFalseQuestionComponent implements OnInit {
  trueA: Answer = {
    id: 0,
    answer: 'True',
    status: true
  };
  falseA: Answer = {
    id: 0,
    answer: 'False',
    status: false
  };
  question: Question = {
    id: 0,
    question: '',
    type: 2,
    enabled: true,
    categories: [],
    answers: [this.trueA, this.falseA]
  };
  categories: ICategory[];
  message = '';

  questionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private service: QuestionService,
              private router: Router,
              private categoryService: CategoryService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }
  submit(): void {
    if (!this.questionForm.invalid) {
      this.question.question = this.questionForm.get('question').value;
      if(this.questionForm.get('answer').value.answer == 'False') {
        this.trueA.status = false;
        this.falseA.status = true;
      };
      this.question.categories = this.questionForm.get('category').value;
      this.service.createQuestion(this.question)
          .subscribe(() => {
            this.message = 'Success!';
            const dialogRef = this.dialog.open(SuccessDialogComponent);
            dialogRef.afterClosed().subscribe();
            // this.router.navigate(['/admin/questions/list']);
          });
    } else {
      this.message = 'UnSuccess!';
    }
  }
  cancel() {
    this.router.navigate(['admin/questions/list'])
  }
}
