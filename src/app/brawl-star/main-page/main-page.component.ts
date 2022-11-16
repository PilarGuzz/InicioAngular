import { Component } from '@angular/core';
import { Character } from '../character/interfaces/character';
import { BSService } from '../services/brawl-star-service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  personajes : Character[];
  constructor(bsService:BSService) { 
    console.log('Constructor main page')
    this.personajes = bsService.personajes;
    
  }

  nuevo = {
    pj:'',
    health: 0
  };


  addCharacter(character: Character){
    
    this.personajes.push({...character});
  }

}
