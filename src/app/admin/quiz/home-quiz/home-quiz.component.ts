import { Component, OnInit } from '@angular/core';
class NavLink {
  constructor(public path: string, public label: string) {}
}
@Component({
  selector: 'app-home-quiz',
  templateUrl: './home-quiz.component.html',
  styleUrls: ['./home-quiz.component.scss']
})
export class HomeQuizComponent implements OnInit {
  navLinks: NavLink[] = [];
  constructor() { }

  ngOnInit(): void {
    this.navLinks = [
      new NavLink('list', 'List Quiz'),
      new NavLink('create', 'Create Quiz'),
    ];
  }
}
