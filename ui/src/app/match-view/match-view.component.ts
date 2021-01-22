import { Observable } from 'rxjs';
import { ImageService } from './../services/image/image.service';
import { Outcome } from './../models/outcome.model';
import { OutcomeService } from './../services/outcome/outcome.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {
  outcome: Outcome;
  message: String;
  gameIsInSession: Boolean;
  userImg: String = "../../assets/rock-icon.png";
  botImg: String = "../../assets/rock-icon.png";
  moves: string[];
  
  constructor(private outcomeService: OutcomeService, private imageService: ImageService, private router: Router) { 
    this.outcome = {
      userMove: 0,
      botMove: 0,
      userWins: false,
      isADraw: false
    };
    this.message = "Rock, paper, scissors, shoot!";
    // this.userImg = new Observable();
    // this.botImg = new Observable();
    this.gameIsInSession = true;
    this.moves = ["", "Rock", "Paper", "Scissors"];
  }

  ngOnInit(): void {
    this.router.events.subscribe();
  }

  getOutcome(userMove: number) {
    this.outcomeService.getOutcome(userMove).subscribe((res) => {
      this.outcome = res;
      this.userImg = `../../assets/${this.moves[this.outcome.userMove]}-icon.png`
      this.botImg = `../../assets/${this.moves[this.outcome.botMove]}-icon.png`
      if (this.outcome.isADraw) {
        this.message = "It's a draw. Continue the match...";
      } else if (this.outcome.userWins) {
        this.message = `Your ${this.moves[this.outcome.userMove]} beats ${this.moves[this.outcome.botMove]}! You Win!`
        this.gameIsInSession = false;
      } else {
        this.message = `${this.moves[this.outcome.botMove]} beats your ${this.moves[this.outcome.userMove]}... You Lose...`
        this.gameIsInSession = false;
      }

      // this.userImg = this.getImage(this.outcome.userMove);

      console.log(this.outcome);
    });
  }

  startNewMatch() {
    this.router.navigateByUrl('redirect', {skipLocationChange: true}).then(()=>
    this.router.navigate(["match"]));
  }

  homeMenu() {
    this.router.navigate([""]);
  }

  // getImage(move: number): Observable<any> {
  //   return this.imageService.getImage(move);
  // }
}
