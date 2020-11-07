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
      new NavLink('list', 'List Category'),
      new NavLink('add', 'Create Category'),
      new NavLink(':id/edit', 'Edit Category'),
      new NavLink(':id/detail', 'Detail Category'),
    ];
  }
}
