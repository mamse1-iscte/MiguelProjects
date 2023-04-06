import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Card Game',
      imageUrl: 'https://pngimg.com/d/cards_PNG8485.png',
      description: 'A simple card game',
      link: '/cardgame'
    },
    {
      title: 'Next Game',
      imageUrl: '',
      description: 'in progress',
      link: ''
    }
    // add more projects here
  ];
}
