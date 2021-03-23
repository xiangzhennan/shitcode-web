import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public data: any =  {
      questionId: 1,
      principle: 'shitcode rule one: use variable name with no actual meaning',
      realPrinciple: 'coding rule one: use variable with valid meaning',
      options: [{
        optionId: 1,
        content: 'int i = 0',
      },
        {optionId: 2,
          content: 'int numOfStudent = 0',
        }],
      correctId: 2,
      historyCorrectNum: 5,
      historyAnswerNum: 10
    };

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  }

  getNextQuestion(): void {
    this.dataService.getAll(2).subscribe(
      data => {
        this.data = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  checkAnswer() {
    alert('thanks for answer');
    const elementById = document.getElementById('principle');
    if (elementById != null){
      elementById.innerHTML = this.data.realPrinciple;
    }
  }
}
