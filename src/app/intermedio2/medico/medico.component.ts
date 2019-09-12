import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../intermedio2/medico/medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  medicos: any[] = [];

  constructor( public medico$: MedicoService) { }

  ngOnInit() {
  }

  saludarMedico( nombre: string ) {
    return `Hola ${ nombre }`;
  }

  obtenerMedicos() {
    this.medico$.getMedicos().subscribe( (med: any[]) => this.medicos = med );
  }

}
