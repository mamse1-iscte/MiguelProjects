import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enemy-cards',
  templateUrl: './enemy-cards.component.html',
  styleUrls: ['./enemy-cards.component.scss']
})
export class EnemyCardsComponent implements OnInit {

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
