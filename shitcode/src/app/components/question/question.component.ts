import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {element} from 'protractor';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public data: any = {
      questionId: -1,
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

  public questionIDArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public isAnswered = false;
  public selectedOption = -1;
  // -1 for not answered, 0 for false, 1 for true
  public answerStatus: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  historyAccuracy: number = 0;

  constructor( private dataService: DataService, public router: Router, public http: HttpClient) {

  }

  ngOnInit(): void{}

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    const answers: any = localStorage.getItem('answerStatus');
    console.log(answers);
    if (answers) {
      this.answerStatus = JSON.parse(answers);
      let i = 0;
      // get first unanswered question from server
      for (; i < 10; i++) {
        if (this.answerStatus[i] === -1) {
          this.loadQuestion(i + 1);
          break;
        }
      }
      // if all questions have been answered
      if (i === 10) {
        this.isAnswered = true;
        this.loadQuestion(1);
      }
      // init nav bar, gray for not answered, green for correct, red for wrong
      for (i = 0; i < 10; i++) {
        console.log((i + 1).toString());
        const navBox: any = document.getElementById((i + 1).toString());
        if (this.answerStatus[i] === 1) {
          navBox.style.backgroundColor = 'green';
        } else if (this.answerStatus[i] === 0) {
          navBox.style.backgroundColor = 'red';
        } else {
          navBox.style.backgroundColor = 'gray';
        }
      }
    } else {
      localStorage.setItem('answerStatus', JSON.stringify(this.answerStatus));
    }
  }

  // load next question, reset
  loadQuestion( id: number ): void{
    this.dataService.getQuestion(id).subscribe(
      data => {
        this.data = data;
        this.resetAnswerState();
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // reset component to origin state when no answer is selected
  resetAnswerState(): void{
    this.isAnswered = false;
    this.selectedOption = -1;
    const principle: any = document.getElementById('principle');
    principle.style.textDecoration = '';
  }

  chooseLeft(): void{
    this.selectedOption = 1;
    const left = document.getElementById('left');
    // @ts-ignore
    left.style.boxShadow = '0 5px 5px pink';
    const right = document.getElementById('right');
    // @ts-ignore
    right.style.boxShadow = '';
  }

  chooseRight(): void{
    this.selectedOption = 2;
    const left = document.getElementById('left');
    // @ts-ignore
    left.style.boxShadow = '';
    const right = document.getElementById('right');
    // @ts-ignore
    right.style.boxShadow = '0 5px 5px lightblue';
  }

  confirm(): void {
    if (this.selectedOption === -1){
      alert('please choose an answer!');
      return;
    }
    this.updateAnswer();
    if (this.data.questionId != 10){
      this.getNextQuestion();
    } else {
      this.report();
    }
  }

  updateAnswer(): void {
    this.isAnswered = true;
    this.checkAnswer();
    this.dataService.submitAnswer(
      {id: this.data.questionId, isCorrect: localStorage.getItem('answerStatus')});
    this.feedbackAnswer();
  }

  // tslint:disable-next-line:typedef
  checkAnswer() {
    let color: string;
    if (this.selectedOption === this.data.correctId){
      color = 'green';
      this.answerStatus[this.data.questionId - 1] = 1;
    }
    else{
      color = 'red';
      this.answerStatus[this.data.questionId - 1] = 0;
    }
    localStorage.setItem('answerStatus', JSON.stringify(this.answerStatus));
    const navBox: any = document.getElementById(this.data.questionId.toString());
    navBox.style.backgroundColor = color;
  }

  feedbackAnswer(): void {
    const principle: any = document.getElementById('principle');
    principle.style.textDecoration = 'line-through';
    this.getAccuracy();
    // 动画
  }

  getNextQuestion(): void {
    setTimeout(() => {
      this.loadQuestion(this.data.questionId + 1); }, 2000);
  }

  // tslint:disable-next-line:typedef
  report(): void{
    if (this.selectedOption === -1){
      alert('please choose an answer!');
      return;
    }
    alert('thanks for answer!');
    this.updateAnswer();
    setTimeout(() => {
      this.router.navigate(['/report']); },2500);
  }

  getAccuracy(): void{
    // transfer to percentage form
    if(this.data.historyAnswerNum != 0) {
      this.historyAccuracy = this.data.historyCorrectNum/this.data.historyAnswerNum * 100 ;
    }
  }
}
