import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-deck',
  templateUrl: './player-deck.component.html',
  styleUrls: ['./player-deck.component.scss']
})
export class PlayerDeckComponent implements OnInit {

  cards = [
    { id: 1, attack: 2, defense: 2, hover: false },
    { id: 2, attack: 3, defense: 1, hover: false },
    { id: 3, attack: 1, defense: 3, hover: false },
    { id: 4, attack: 4, defense: 2, hover: false },
    { id: 5, attack: 2, defense: 4, hover: false }
  ];
  remainingCards = this.cards.length;

  constructor() { }

  ngOnInit(): void {
  }

  selectCard(card: any) {
    // Logic to select a card and pass it to the PlayerAttackComponent
    this.remainingCards--;
  }

}
