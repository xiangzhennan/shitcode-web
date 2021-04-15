import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public data: any =  {
    correctNum: 5,
    accuracy: '50%',
    badge: 'Try harder'
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const answers: any = localStorage.getItem('answerStatus');
    let correctNum = 0;
    if (answers){
      const answerStatus: any = JSON.parse(answers);
      for (let i = 1; i++; i < 10){
        if (answerStatus[i] === 1){
          correctNum++;
        }
      }
    }
    this.retrieveData(correctNum);
  }



  retrieveData(correctNum: number): void {
    this.dataService.getReport(correctNum).subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
