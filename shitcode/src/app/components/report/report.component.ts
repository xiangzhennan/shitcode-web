import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public data: any =  {
    correctNum: '5',
    accuracy: '50%',
    ranking: '40%',
    badge: 'Try harder'
  };

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
  }


  retrieveData(): void {
    this.reportService.getAccuracy(2).subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
