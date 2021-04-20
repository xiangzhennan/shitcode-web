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
  private defaultAnswerStatus: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    const answers: any = localStorage.getItem('answerStatus');
    let correctNum = 0;
    if (answers){
      const answerStatus: number[] = JSON.parse(answers);
      for (let i = 0; i < 10; i++){
        if (answerStatus[i] === 1){
          correctNum++;
        }
      }
    }
    this.retrieveData(correctNum);
    // avoid bgColor conflict
    document.body.style.backgroundColor = 'rgba(255,231,16,126)';
  }

  retrieveData(correctNum: number): void {
  this.dataService.getReport(correctNum).subscribe(
    data => {
      this.data = data;
      this.data.accuracy = parseInt(this.data.accuracy);
      console.log(data);
      },
    error => {
      console.log(error);
    });
  }

  clearAnswers(): void {
    localStorage.setItem('answerStatus', JSON.stringify(this.defaultAnswerStatus));
  }
}
