import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  public dataCollection: Array<string> = [
    'Angular',
    'Vue.js',
    'React'
  ];

  public showIt: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
