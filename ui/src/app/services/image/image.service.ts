import { API_KEY } from './../../models/API_KEY.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  // getImage(move: number): Observable<any> {
  //   var img = "";
    
  //   if(move == 1) {
  //     img = "rock";
  //   } else if (move == 2) {
  //     img = "paper";
  //   } else if (move == 3) {
  //     img = "scissors";
  //   }
    

  //   return this.httpClient.get(`https://api.unsplash.com/photos/?client_id=${this.apiKey.client_id}`);
  // }
}
