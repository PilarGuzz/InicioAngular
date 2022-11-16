import { Injectable } from "@angular/core";
import { Character } from "../character/interfaces/character";

@Injectable()
export class BSService{
    private _personajes = [
        {pj: 'Shelly', health: 3600},
        {pj: 'Nita', health: 3800},
        {pj: 'Colt', health: 2800},
        {pj: 'Jessie', health: 900}
    
      ]

    constructor(){
        console.log('Servicio iniciado');
    }

    get personajes(): Character[]{
        return [...this._personajes];
    }

    addCharacter(character:Character){
        this._personajes.push(character);
    }

    deleteCharacter(character:Character){
    
        this._personajes = this._personajes.filter(item => item!== character);
    }


}
