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
    selectedType: string;
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
                this.filteredListQuestions = this.listQuestions;
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
            if (this.selectedCategory) {
                if (res.question.toLowerCase().match(this.questionName.toLowerCase())) {
                    for (let i in res.categories) {
                        if (res.categories[i].category === this.selectedCategory)
                            return true
                    }
                    return false;
                }
            }
            return res.question.toLowerCase().match(this.questionName.toLowerCase())
        })
    }

    clear() {
        this.questionName = '';
        this.searchCategory();
    }

    searchCategory() {
        if (!this.selectedCategory) {
            this.filteredListQuestions = this.listQuestions;
        } else {
            this.questionName = '';
            this.filteredListQuestions = this.listQuestions.filter(res => {
                for (let i in res.categories) {
                    if (res.categories[i].category === this.selectedCategory)
                        return true
                }
                return false;
            })
        }
    }

    searchTypeQuesiton() {
        if (this.selectedType == "0")
            this.filteredListQuestions = this.listQuestions.filter(res => {
                return res.type === 0
            })
        else if(this.selectedType ==='1')
            this.filteredListQuestions = this.listQuestions.filter(res => {
                return res.type === 1
            })
        else
            this.filteredListQuestions = this.listQuestions.filter(res => {
                return res.type === 2
            })
    }
}
