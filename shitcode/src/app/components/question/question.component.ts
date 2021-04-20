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
  isCorrect = false;
  private themeColors: any[] = ["#FEC5BB","#FCD5CE","#FAE1DD","#F8EDEB","#E8E8E4","#D8E2DC","#ECE4DB","#FFE5D9","#FFD7BA","#FEC89A"];
  private stateColors: any = {correct: "#FFA000", wrong:"red", default: ""};

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
      // init nav bar with different status colors & img
      for (i = 0; i < 10; i++) {
        console.log((i + 1).toString());
        const navBox: any = document.getElementById((i + 1).toString());
        if (this.answerStatus[i] === 1) {
          navBox.style.backgroundColor = this.stateColors.correct;
          navBox.childNodes[0].src = "../../../assets/img/happy.png";
        } else if (this.answerStatus[i] === 0) {
          navBox.style.backgroundColor = this.stateColors.wrong;
          navBox.childNodes[0].src = "../../../assets/img/dead.png";
        } else {
          navBox.style.backgroundColor = this.stateColors.default;
          navBox.childNodes[0].src = "../../../assets/img/cold.png";
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
        (this.answerStatus[id-1] === -1) ? this.resetAnswerState() : this.retainAnsweredState(id);
        document.bgColor = this.themeColors[id-1];
        // to highlight current navBox
        for(var i in this.questionIDArray){
          const navBox: any = document.getElementById(this.questionIDArray[i].toString());
          navBox.style.opacity = '0.6';
          if(this.questionIDArray[i] === id){
            navBox.style.opacity = '1';
          }
        }
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
    const principle: any = document.getElementById('principle');
    principle.style.textDecoration = '';
    const confirmNext: any = document.getElementById('confirm');
    confirmNext.innerHTML = "confirm";
    // reset option status
    this.selectedOption = -1;
    const left: any = document.getElementById('left');
    left.style.opacity = '1';
    const right: any = document.getElementById('right');
    right.style.opacity = '1';
  }

  retainAnsweredState(id:number): void{
    this.isAnswered = true;
    const principle: any = document.getElementById('principle');
    principle.style.textDecoration = 'line-through';
    const confirmNext: any = document.getElementById('confirm');
    confirmNext.innerHTML = "next";
    // retain selected status
    let optionIdSet = [2,1];
    this.selectedOption = (this.answerStatus[id-1]===1) ?
      this.data.correctId : (optionIdSet.indexOf(this.data.correctId) + 1);
    (this.selectedOption === 1) ? this.chooseLeft() : this.chooseRight();
  }

  chooseLeft(): void{
    this.selectedOption = 1;
    const left: any = document.getElementById('left');
    left.style.opacity = '0.6';
    /* right.style.boxShadow = '0 5px 5px lightpink'*/;
    const right: any = document.getElementById('right');
    right.style.opacity = '1';
  }

  chooseRight(): void{
    this.selectedOption = 2;
    const left: any = document.getElementById('left');
    left.style.opacity = '1';
    const right: any = document.getElementById('right');
    right.style.opacity = '0.6'
    /* right.style.boxShadow = '0 5px 5px lightblue'*/;
  }

  confirm(): void {
    // if answered, jump to next question / report page
    const confirmNext: any = document.getElementById('confirm');
    if (confirmNext.innerHTML === "next") {
      if(this.data.questionId === 10) {
        this.report();
      } else {
        this.loadQuestion(this.data.questionId + 1);
      }
      return;
    }
    // otherwise, confirm answer
    if (this.selectedOption === -1) {
      alert('please choose an answer!');
      return;
    }
    this.updateAnswer();
    confirmNext.innerHTML = "next";
  }

  updateAnswer(): void {
    this.isAnswered = true;
    this.checkAnswer();
    this.dataService.submitAnswer(JSON.stringify(
      {questionId: this.data.questionId, isCorrect: this.isCorrect}));
    // feedback
    const principle: any = document.getElementById('principle');
    principle.style.textDecoration = 'line-through';
  }

  checkAnswer() {
    let color: string;
    let imgUrl: string;
    if (this.selectedOption === this.data.correctId){
      color = this.stateColors.correct;
      imgUrl = "../../../assets/img/happy.png";
      this.answerStatus[this.data.questionId - 1] = 1;
    }
    else{
      color = this.stateColors.wrong;
      imgUrl = "../../../assets/img/dead.png";
      this.answerStatus[this.data.questionId - 1] = 0;
    }
    localStorage.setItem('answerStatus', JSON.stringify(this.answerStatus));
    const navBox: any = document.getElementById(this.data.questionId.toString());
    navBox.style.backgroundColor = color;
    navBox.childNodes[0].src = imgUrl;
    this.isCorrect = (this.selectedOption === this.data.correctId);
  }

  report(): void{
    // disabled until it is answered
    if(this.isAnswered) {
      this.router.navigate(['/report']);
    }
  }

  getAccuracy() {
    if (this.data.historyCorrectNum == 0 || this.data.historyAnswerNum == 0){
      return "0%";
    }
    return (Math.round(this.data.historyCorrectNum / this.data.historyAnswerNum * 10000) / 100.00) + "%";
  }
}
