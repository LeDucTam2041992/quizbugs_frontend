import { Component, OnInit } from '@angular/core';
import {Question} from '../../../model/question';
import {QuestionService} from '../../../service/question.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {DeleteDialogComponent} from '../../questions/delete-dialog/delete-dialog.component';
import {Exam} from '../../../model/exam';
import {ExamService} from '../../../service/exam.service';

@Component({
  selector: 'app-detail-quiz',
  templateUrl: './detail-quiz.component.html',
  styleUrls: ['./detail-quiz.component.scss']
})
export class DetailQuizComponent implements OnInit {
  listQuestions: Question[];
  currentExam: Exam = {
    id: 1,
    name: 'Java Exam',
    enabled: true,
    questionSet: []
  };
  constructor(private examService: ExamService,
              private route: Router,
              private categoryService: CategoryService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(): void {
    const id = Number.parseInt(this.router.snapshot.paramMap.get('id'));
    this.examService.getExamById(id).subscribe(data => {
      this.currentExam = data;
      this.listQuestions = this.currentExam.questionSet;
    });
  }
  delete(id): void {
  }

    back() {
      this.route.navigate(['admin/quizs/list'])
    }
}
