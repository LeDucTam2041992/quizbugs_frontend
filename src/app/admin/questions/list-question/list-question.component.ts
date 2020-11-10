import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionService} from '../../../service/question.service';
import {Question} from '../../../model/question';
import {CategoryService} from "../../../service/category.service";
import {ICategory} from "../../../model/ICategory";

@Component({
    selector: 'app-list-question',
    templateUrl: './list-question.component.html',
    styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {
    filteredListQuestions: Question[];
    listQuestions: Question[];
    listCategories: ICategory[];
    selectedCategory: string;
    selectedType: number;
    questionName: string;

    constructor(private questionService: QuestionService, private router: Router,
                private categoryService: CategoryService) {
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
                        status: item.status,
                        categories: item.categories,
                        answers: item.answers
                    };
                });
                this.listQuestions = array;
                this.filteredListQuestions =  this.listQuestions.slice(0, 5);
            }
        );
    }

    delete(id): void {
        if (confirm('Are you sure want to delete?')) {
            this.questionService.deleteQuestion(id).subscribe(() => {
                this.filteredListQuestions = this.listQuestions;
            });
        }
    }

    add() {
        this.router.navigate(['questions/add']);
    }

    SearchTextBox() {
        this.filteredListQuestions = this.listQuestions.filter(res => {
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
        })
    }

    clear() {
        this.questionName = '';
        this.searchCategory();
    }

    searchCategory() {
        if (!this.selectedCategory) {
            if (!this.selectedType)
                this.filteredListQuestions = this.listQuestions;
            else
                this.searchTypeQuestion();
        } else {
            this.questionName = '';
            this.filteredListQuestions = this.listQuestions.filter(res => {
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
            })
        }
    }

    searchTypeQuestion() {
        if (!this.selectedType) {
            if (!this.selectedCategory)
                this.filteredListQuestions = this.listQuestions;
            else
                this.searchCategory()
        } else {
            this.filteredListQuestions = this.listQuestions.filter(res => {
                if (!this.selectedCategory)
                    return res.type == this.selectedType
                else {
                    for (let i in res.categories) {
                        if (res.categories[i].category === this.selectedCategory && res.type == this.selectedType)
                            return true
                    }
                    return false;
                }
            })
        }
    }

    onPageChange($event) {
        this.filteredListQuestions =  this.listQuestions.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
    }
}
