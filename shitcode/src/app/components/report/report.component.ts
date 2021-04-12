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
  }


  retrieveData(): void {
    this.dataService.getReport(2).subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
