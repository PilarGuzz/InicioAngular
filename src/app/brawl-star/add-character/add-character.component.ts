import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character/interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() nuevo: Character = { pj: '', health: 0};

  @Input() personajes : Character[] = [];

  addCharacter(){
    let nuevopj = {pj:this.nuevo.pj, health: this.nuevo.health};
    this.personajes.push(nuevopj);
    this.nuevo = {
      pj:'',
      health: 0
    };
  }
}
