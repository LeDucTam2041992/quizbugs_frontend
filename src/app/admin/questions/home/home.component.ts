import { Component, OnInit } from '@angular/core';

class NavLink {
  constructor(public path: string, public label: string) {}
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navLinks: NavLink[] = [];
  constructor() {}
  ngOnInit() {
    this.navLinks = [
      new NavLink('list', 'List Questions'),
      new NavLink('add', 'Create Question'),
      new NavLink(':id/edit', 'Edit Question'),
      new NavLink(':id/detail', 'Detail Question'),
    ];
  }
}
