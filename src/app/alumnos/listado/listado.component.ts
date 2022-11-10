import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alumnos: string[] = ['Javi', 'Sergio', 'Pilar', 'Vicente'];
  approved: string[] = [];
  aprobar(){
    
    this.approved.push(this.alumnos[this.alumnos.length-1])
    this.alumnos.pop()

  }

}
