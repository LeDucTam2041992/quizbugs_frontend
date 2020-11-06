import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {QuestionService} from "../../../service/question.service";

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  listQuestions: Question[];
  constructor(private questionService: QuestionService, private router: Router) {
  }

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
            category: item.category,
            answers: item.answers
          };
        });
        this.listQuestions = array;
      }
    )
  }

  delete(id): void {
    if (confirm('Are you sure want to delete?')) {
      this.questionService.deleteQuestion(id).subscribe(res => {
        this.getAll();
      });
    }
  }
}
