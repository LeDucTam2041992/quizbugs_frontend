import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public login = "/login";
  public register ='/register';
  public home ='/home';

  constructor() { }

  ngOnInit(): void {
  }

}
