import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionService} from '../../../service/question.service';
import {Question} from '../../../model/question';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
  listQuestions: Question[];
  constructor(private questionService: QuestionService, private router: Router) {
  }
  questionName: string;
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
    );
  }

  delete(id): void {
    if (confirm('Are you sure want to delete?')) {
      this.questionService.deleteQuestion(id).subscribe(() => {
        this.getAll();
      });
    }
  }
  add() {
    this.router.navigate(['questions/add']);
  }

  Search() {
    this.listQuestions = this.listQuestions.filter( res =>{
      return res.question.toLowerCase().match(this.questionName.toLowerCase());
    })
  }
}
