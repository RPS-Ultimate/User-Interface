import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService {

  constructor(private httpClient: HttpClient) { }

  getOutcome(userMove: number): Observable<any> {
    return this.httpClient.get(`http://13.89.109.81/api/outcome/${userMove}`);
  }
}
