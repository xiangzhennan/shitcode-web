import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public REST_API_QUESTION = 'http://localhost:3000/api/question?id=';
  public REST_API_REPORT = 'http://localhost:3000/api/report?correctNum=';


  constructor(private httpClient: HttpClient) { }


  // tslint:disable-next-line:typedef
  public getQuestion(id: number){
    const url = this.REST_API_QUESTION + id;
    return this.httpClient.get(url);
  }

  // tslint:disable-next-line:typedef
  public getReport(correctNum: number){
    const url = this.REST_API_REPORT + correctNum;
    return this.httpClient.get(url);
  }
}
