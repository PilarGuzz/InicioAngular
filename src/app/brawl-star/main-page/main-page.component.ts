import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor() { }

  nuevo = {
    pj:'',
    health: 0
  };

  personajes = [
    {pj: 'Shelly', health: 3600},
    {pj: 'Nita', health: 3800},
    {pj: 'Colt', health: 2800},
    {pj: 'Jessie', health: 900}

  ]

}
