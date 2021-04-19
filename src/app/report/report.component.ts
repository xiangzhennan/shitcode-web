import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  correctNum:number;
  accuracy:number;
  badge:string;
  constructor() {
    this.correctNum=3;
    this.accuracy=0.3;
    this.badge="Try harder";
  }

  ngOnInit(): void {
  }

}
