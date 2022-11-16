import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../character/interfaces/character';
import { BSService } from '../services/brawl-star-service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  constructor(private bsservice :BSService) {
    console.log('Constructor add character')
   }

  ngOnInit(): void {
  }
  
  @Input() nuevo: Character = { pj: '', health: 0};
  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  // @Input() personajes : Character[] = [];

  addCharacter(){
    this.bsservice.addCharacter({...this.nuevo});
    //this.onNewCharacter.emit(this.nuevo)    
    // let nuevopj = {pj:this.nuevo.pj, health: this.nuevo.health};
    // this.personajes.push(nuevopj);
    this.nuevo = {
      pj:'',
      health: 0
    };
  }
}
