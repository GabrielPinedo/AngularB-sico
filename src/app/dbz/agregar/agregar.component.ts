import { Component, Input, Output, EventEmitter} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})


export class AgregarComponent {
 
 
  mensaje: string = '';

  @Input() nuevo : Personaje =  {
  nombre: '',
  power: 0,
  }

  //@Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter() ;
  constructor(private DbzService: DbzService){
  
  }

  agregar(){
    
    if(this.nuevo.nombre.trim().length == 0 ){
      this.mensaje = 'Ingrese el nombre del guerrero'
    //DbzService.agregarPersonaje(this.nuevo);
    }
    else if(this.nuevo.power <= 0){
      this.mensaje = 'Ingrese el poder del Guerrero'
    }

    else{
     this.DbzService.agregarPersonaje(this.nuevo);
      this.nuevo ={nombre:'',power:0};
      this.mensaje= '';
     
     console.log(this.nuevo)
}
}


}
