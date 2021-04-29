import { Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
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
    principle: 'test',
    realPrinciple: 'test',
    options: [{
      optionId: 1,
      content: 'test'
    },
      {optionId: 2,
        content: 'test'
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
  private themeColors: any[] = ['#FEC89A', '#FFD7BA', '#FCD5CE', '#FAE1DD', '#E8E8E4', '#D8E2DC', '#ECE4DB', '#FFE5D9',
    '#FFD7BA', '#FEC89A'];
  private stateColors: any = {correct: '#FFA000', wrong: 'red', default: ''};

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
          navBox.childNodes[0].src = '../../../assets/img/nav/good.png';
        } else if (this.answerStatus[i] === 0) {
          navBox.style.backgroundColor = this.stateColors.wrong;
          navBox.childNodes[0].src = '../../../assets/img/nav/bad.png';
        } else {
          navBox.style.backgroundColor = this.stateColors.default;
          navBox.childNodes[0].src = '../../../assets/img/nav/default.png';
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
        document.body.style.backgroundColor = this.themeColors[id - 1];
        // format the question contents
        const left: any = document.getElementById('content1');
        const right: any = document.getElementById('content2');
        left.innerHTML = this.getQuestionContent(this.data.options[0].content);
        right.innerHTML = this.getQuestionContent(this.data.options[1].content);
        // to highlight current navBox
        this.questionIDArray.forEach(item => {
          const navBox: any = document.getElementById(item.toString());
          navBox.style.opacity = '0.6';
          if (item === id){
            navBox.style.opacity = '1';
          }
        });
        (this.answerStatus[id - 1] === -1) ? this.resetAnswerState() : this.retainAnsweredState(id);
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
    confirmNext.innerHTML = 'confirm';
    // reset selected status
    this.selectedOption = -1;
    const left: any = document.getElementById('left');
    const right: any = document.getElementById('right');
    left.style.opacity = '0.6';
    right.style.opacity = '0.6';
    this.resetOptionFeedback();
  }

  resetOptionFeedback(): void {
    const left: any = document.getElementById('left');
    const right: any = document.getElementById('right');
    left.lastChild.innerText = '';
    right.lastChild.innerText = '';
    const leftTitle: any = document.getElementById('leftTitle');
    const rightTitle: any = document.getElementById('rightTitle');
    leftTitle.innerText = '';
    rightTitle.innerText = '';
  }

  retainAnsweredState(id: number): void{
    this.isAnswered = true;
    // retain selected status
    this.isCorrect = this.answerStatus[id - 1] === 1;
    const optionIdSet = [2, 1];   // a trick to return 1 when input 2, and vice versa
    this.selectedOption = this.isCorrect ? this.data.correctId : (optionIdSet.indexOf(this.data.correctId) + 1);
    this.selectedOption === 1 ? this.chooseLeft() : this.chooseRight();
    // reset & generate feedback
    this.resetOptionFeedback();
    this.feedbackAnswer();
  }

  chooseLeft(): void{
    this.selectedOption = 1;
    const left: any = document.getElementById('left');
    left.style.opacity = '1';
    left.style.boxShadow = '0 5px 5px lightpink';
    const right: any = document.getElementById('right');
    right.style.opacity = '0.6';
  }

  chooseRight(): void{
    this.selectedOption = 2;
    const left: any = document.getElementById('left');
    left.style.opacity = '0.6';
    const right: any = document.getElementById('right');
    right.style.opacity = '1';
    right.style.boxShadow = '0 5px 5px lightblue';
  }

  confirm(): void {
    // if answered, jump to next question / report page
    const confirmNext: any = document.getElementById('confirm');
    if (confirmNext.innerHTML === 'next') {
      if (this.data.questionId === 10) {
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
    this.feedbackAnswer();
  }

  updateAnswer(): void {
    this.isAnswered = true;
    this.checkAnswer();
    this.dataService.submitAnswer(JSON.stringify(
      {questionId: this.data.questionId, isCorrect: this.isCorrect})).subscribe();
  }

  checkAnswer(): void {
    let color: string;
    let imgUrl: string;
    this.isCorrect = this.selectedOption === this.data.correctId;
    if (this.isCorrect){
      color = this.stateColors.correct;
      imgUrl = '../../../assets/img/nav/good.png';
      this.answerStatus[this.data.questionId - 1] = 1;
    } else{
      color = this.stateColors.wrong;
      imgUrl = '../../../assets/img/nav/bad.png';
      this.answerStatus[this.data.questionId - 1] = 0;
    }
    localStorage.setItem('answerStatus', JSON.stringify(this.answerStatus));
    const navBox: any = document.getElementById(this.data.questionId.toString());
    navBox.style.backgroundColor = color;
    navBox.childNodes[0].src = imgUrl;
  }

  // feedbacks: real-principle text decoration, next button, option property, comment
  feedbackAnswer(): void {
    const principle: any = document.getElementById('principle');
    principle.style.textDecoration = 'line-through';
    const confirmNext: any = document.getElementById('confirm');
    confirmNext.innerHTML = 'next';
    // option property & comment
    const leftTitle: any = document.getElementById('leftTitle');
    leftTitle.style.display = 'block';
    leftTitle.innerText = this.data.correctId === 1 ? 'shitcode' : 'good code';
    const rightTitle: any = document.getElementById('rightTitle');
    rightTitle.style.display = 'block';
    rightTitle.innerText = this.data.correctId === 2 ? 'shitcode' : 'good code';
    // const container: any = document.getElementsByClassName('container');
    const selected: any = this.selectedOption === 1 ? document.getElementById('left') : document.getElementById('right');
    const feedback: any = selected.lastChild;
    feedback.style.display = 'block';
    if (this.isCorrect){
      feedback.innerText = 'Congruatulations!';
    } else{
      feedback.innerText = 'What a pity!';
    }
  }

  report(): void{
    // disabled until it is answered
    if (this.isAnswered) {
      setTimeout(() => {
        this.router.navigate(['/report']); }, 2000);
    }
  }

  getAccuracy(): string {
    if (this.data.historyCorrectNum === 0 || this.data.historyAnswerNum === 0){
      return '0%';
    }
    return (Math.round(this.data.historyCorrectNum / this.data.historyAnswerNum * 10000) / 100.00) + '%';
  }
}
