import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.scss']
})
export class EnemyComponent implements OnInit {

  @Input() enemyHP: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
