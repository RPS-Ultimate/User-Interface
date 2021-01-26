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
  gameIsInSession: Boolean = true;
  message: String = "Rock, paper, scissors, shoot!";
  userImg: String = "../../assets/Ready(0)-icon(0).png";
  botImg: String = "../../assets/Ready-icon(0).png";
  moves: String[] = ["Rock", "Paper", "Scissors"];
  outcome: Outcome = {
    userMove: 0,
    botMove: 0,
    userWins: false,
    isADraw: false
  };
  
  constructor(private outcomeService: OutcomeService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.router.events.subscribe();
  }

  getOutcome(userMove: number) {
    this.outcomeService.getOutcome(userMove).subscribe((res) => {
      this.outcome = res;
      this.userImg = `../../assets/${this.moves[this.outcome.userMove]}-icon(0).png`
      this.botImg = `../../assets/${this.moves[this.outcome.botMove]}-icon(0).png`
      if (this.outcome.isADraw) {
        this.message = "It's a draw. Continue the match...";
      } else if (this.outcome.userWins) {
        this.message = `Your ${this.moves[this.outcome.userMove]} beats ${this.moves[this.outcome.botMove]}! You Win!`;
        this.gameIsInSession = false;
      } else {
        this.message = `${this.moves[this.outcome.botMove]} beats your ${this.moves[this.outcome.userMove]}... You Lose...`;
        this.gameIsInSession = false;
      }
    });
  }

  startNewMatch() {
    this.router.navigateByUrl('redirect', {skipLocationChange: true}).then(()=>
    this.router.navigate(["match"]));
  }

  homeMenu() {
    this.router.navigate([""]);
  }
}
