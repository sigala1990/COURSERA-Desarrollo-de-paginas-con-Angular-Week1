import { Component, OnInit,Input } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {

  // @Input() destinos: string[];
     destinos: DestinoViaje[];
     @Input() viajes: string[];
  // constructor() { this.destinos = ['Barranquilla','Lima','Barcelona','Buenos Aires']};
  constructor() { this.destinos = [], this.viajes = ['Barranquilla','Lima','Barcelona','Buenos Aires']};

  ngOnInit(): void {
  }
  guardar(nombre:string, url:string):boolean{
    this.destinos.push(new DestinoViaje(nombre, url));
    console.log( this.destinos); 
    
    return false;
  }
}
