import { Component, OnInit, HostBinding } from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {element} from 'protractor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {fadeInOutAnimation} from '../../animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [
    fadeInOutAnimation
  ]
})

export class QuestionComponent implements OnInit {

  public data: any = {
    questionId: 1,
    principle: 'shitcode one: Name variables in an obfuscated way',
    realPrinciple: 'coding rule one: Name variables with valid meaning',
    options: [{
      optionId: 1,
      content: 'int a = 42;'
    },
      {optionId: 2,
        content: 'int age = 42;'
      }],
    correctId: 1,
    historyCorrectNum: 0,
    historyAnswerNum: 0
  };

  public questionIDArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public isAnswered = false;
  public selectedOption = -1;
  // -1 for not answered, 0 for false, 1 for true
  public answerStatus: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
  isCorrect = false;

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
        }
      }
    }else {
      localStorage.setItem('answerStatus', JSON.stringify(this.answerStatus));
    }
  }

  getQuestionContent(source: string): string{
    const lines: string[] = source.split('\n');
    let questionContent: any = '';
    for (const str of lines){
      questionContent = questionContent + str + '<br>';
    }
    return questionContent;
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
    const left: any = document.getElementById('content1');
    const right: any = document.getElementById('content2');
    left.innerHTML = this.getQuestionContent(this.data.options[0].content);
    right.innerHTML = this.getQuestionContent(this.data.options[1].content);
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
    const left: any = document.getElementById('left');
    left.style.border = '2px solid green';
    const right: any = document.getElementById('right');
    right.style.border = '1px solid dimgrey';
  }

  chooseRight(): void{
    this.selectedOption = 2;
    const left: any = document.getElementById('left');
    left.style.border = '1px solid dimgrey';
    const right: any = document.getElementById('right');
    right.style.border = '2px solid green';
  }

  confirm(): void {
    if (this.selectedOption === -1){
      alert('please choose an answer!');
      return;
    }
    this.updateAnswer();
    if (this.data.questionId < 10){
      this.getNextQuestion();
    } else {
      this.report();
    }
  }

  updateAnswer(): void {
    this.isAnswered = true;
    this.checkAnswer();
    this.dataService.submitAnswer(JSON.stringify({id: this.data.questionId, result: this.isCorrect}));
    this.feedbackAnswer();
  }

  // tslint:disable-next-line:typedef
  checkAnswer() {
    let color: string;
    this.isCorrect = (this.selectedOption === this.data.correctId);
    if (this.isCorrect){
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
    const leftTitle: any = document.getElementById('leftTitle');
    leftTitle.style.display = 'block';
    leftTitle.innerText = this.data.correctId === 1 ? 'shitcode' : 'good code';
    const rightTitle: any = document.getElementById('rightTitle');
    rightTitle.style.display = 'block';
    rightTitle.innerText = this.data.correctId === 2 ? 'shitcode' : 'good code';
    const container: any = document.getElementsByClassName('container');
    const selected: any = this.selectedOption === 1 ? document.getElementById('left') : document.getElementById('right');
    const feedback: any = selected.lastChild;
    feedback.style.display = 'block';
    if (this.isCorrect){
      feedback.innerText = 'Congruatulations! The accuracy of this question is ' + this.getAccuracy();
    }
    else{
      feedback.innerText = 'What a pity! The accuracy of this question is ' + this.getAccuracy();
    }
  }

  feedbackAnswer(): void {
    const principle: any = document.getElementById('principle');
    principle.style.textDecoration = 'line-through';
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
    this.updateAnswer();
    setTimeout(() => {
      this.router.navigate(['/report']); }, 2000);
  }

  getAccuracy(): string{
    let historyAccuracy = '0.00%';
    if (this.data.historyAnswerNum !== 0) {
      historyAccuracy = this.data.historyCorrectNum / this.data.historyAnswerNum * 100 + '%';
    }
    return historyAccuracy;
  }
}
