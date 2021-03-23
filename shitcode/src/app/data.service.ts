import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost:3000/api/question?id=';

  constructor(private httpClient: HttpClient) { }


  // tslint:disable-next-line:typedef
  public getAll(id: number){
    const url = this.REST_API_SERVER + id;
    return this.httpClient.get(url);
  }
}
