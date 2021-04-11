import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private REST_API_SERVER = 'http://localhost:3000/api/report?correctNum=';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  public getAccuracy(correctNum: number){
    const url = this.REST_API_SERVER + correctNum;
    return this.httpClient.get(url);
  }
}
