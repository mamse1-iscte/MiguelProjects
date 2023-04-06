import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-cards',
  templateUrl: './player-cards.component.html',
  styleUrls: ['./player-cards.component.scss']
})
export class PlayerCardsComponent implements OnInit {

  cards = [
    { attack: 2, defense: 2 },
    { attack: 3, defense: 1 },
    { attack: 1, defense: 3 },
    { attack: 4, defense: 2 },
    { attack: 2, defense: 4 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
