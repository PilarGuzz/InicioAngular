import { Component, Input } from '@angular/core';
import { Character } from './interfaces/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  constructor() { }

  @Input() personajes: Character[] = [];


}
