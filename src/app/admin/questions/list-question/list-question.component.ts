import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionService} from '../../../service/question.service';
import {Question} from '../../../model/question';
import {ICategory} from '../../../model/ICategory';
import {CategoryService} from '../../../service/category.service';
import {MesDialogComponent} from '../../quiz/mes-dialog/mes-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
    filteredListQuestions: Question[];
    listQuestions: Question[];
    searchListQuestion: Question[];
    listCategories: ICategory[];
    selectedCategory: string;
    selectedType: number;
    questionName: string;

    pageSize = 5;

    constructor(private questionService: QuestionService,
                private router: Router,
                private categoryService: CategoryService,
                private dialog: MatDialog) {
    }

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
                this.filteredListQuestions =  this.searchListQuestion.slice(0, this.pageSize);
            }
        );
    }

    delete(id): void {
        const dialogRef = this.dialog.open(DeleteDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if(result == true) {
                this.questionService.deleteQuestion(id).subscribe(() => {
                    this.listQuestions.forEach(q => {
                        if(q.id == id) {
                            this.listQuestions.splice(this.listQuestions.indexOf(q),1);
                        }
                    })
                    this.searchListQuestion = this.listQuestions;
                    this.filteredListQuestions =  this.searchListQuestion.slice(0, this.pageSize);
                });

            }
        });
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
        this.filteredListQuestions =  this.searchListQuestion.slice(0, this.pageSize);
    }

    clear() {
        this.questionName = '';
        this.searchCategory();
    }

    searchCategory() {
        if (!this.selectedCategory) {
            if (!this.selectedType) {
                this.searchListQuestion = this.listQuestions;
                this.filteredListQuestions = this.searchListQuestion.slice(0, this.pageSize);
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
            this.filteredListQuestions =  this.searchListQuestion.slice(0, this.pageSize);
        }
    }

    searchTypeQuestion() {
        if (!this.selectedType) {
            if (!this.selectedCategory){
                this.searchListQuestion = this.listQuestions;
                this.filteredListQuestions =  this.searchListQuestion.slice(0, this.pageSize);
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
            this.filteredListQuestions =  this.searchListQuestion.slice(0, this.pageSize);
        }
    }

    onPageChange($event) {
        this.filteredListQuestions =  this.searchListQuestion.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
        this.pageSize = $event.pageSize;
    }
}
