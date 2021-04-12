import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Router} from '@angular/router'
import {HttpClient,HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public data:any= {
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

  public questionIDArray:number[]=[1,2,3,4,5,6,7,8,9,10];
  public flag:boolean = false;
  public selectedOption:number = -1;
  public answerStatus:string[] = ['notAnswered','notAnswered','notAnswered','notAnswered','notAnswered',
    'notAnswered','notAnswered','notAnswered','notAnswered','notAnswered',];

  constructor( private dataService: DataService,public router:Router,public http:HttpClient) {

  }

  ngOnInit(): void {
    let answers:any = localStorage.getItem('answers');
    if(answers){
      this.answerStatus = JSON.parse(answers);
      this.flag = this.answerStatus[this.data.questionId - 1] != "notAnswered";
      for(let i:number=0;i<10;i++){
        let navBox:any = document.getElementById(""+(i+1));
        if(this.answerStatus[i] == 'true'){
          navBox.style.backgroundColor = 'green';
        }
        else if(this.answerStatus[i] == 'false'){
          navBox.style.backgroundColor = 'red';
        }
      }
    }
  }

  chooseLeft(){
    this.selectedOption = 1;
  }

  chooseRight(){
    this.selectedOption = 2;
  }

  jumpTo(id:number){
    setTimeout(()=> {
        this.dataService.getAll(id).subscribe(
          data => {
            this.data = data;
            console.log(data);
          },
          error => {
            console.log(error);
          }
        )},2000);
  }

  getNextQuestion(): void {
    if(this.selectedOption==-1){
      alert("please choose an answer!");
      return;
    }
    let principle:any = document.getElementById("principle");
    principle.style.textDecoration = "line-through";
    this.flag = true;
    this.checkAnswer();
    if(this.data.questionId==10){
      alert("there is no more question, go back to review your answer or get your report now!");
      return;
    }
    this.jumpTo(this.data.questionId+1);
  }

  getReport(){
    alert("thanks for answer!");
    const httpOptions = {headers: new HttpHeaders({'Content-type':'application/json'})};
    let api = this.dataService.server;
    this.http.post(api,localStorage.getItem('answers'),httpOptions);
    this.router.navigate(['/report']);
  }


  // tslint:disable-next-line:typedef
  checkAnswer() {
    let color:string;
    if(this.selectedOption == this.data.correctId){
      color = 'green';
      this.answerStatus[this.data.questionId-1] = 'true';
    }
    else{
      color = 'red';
      this.answerStatus[this.data.questionId-1] = 'false';
    }
    localStorage.setItem('answers',JSON.stringify(this.answerStatus));
    let navBox:any = document.getElementById(""+this.data.questionId);
    navBox.style.backgroundColor = color;
  }
}
