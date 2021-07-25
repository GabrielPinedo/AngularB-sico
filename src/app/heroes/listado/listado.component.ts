import { Component, OnInit } from '@angular/core';
import { heroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
   
  heroes: string[] = [ 'Thor', 'Hulk',' Capitan America', 'Spiderman']
  heroeBorrado: string[] = ['.....'];
  muestra: boolean = false; 
  borrarHeroe(){
    console.log('Borrando....')
    const heroeBorrado =this.heroes.splice(3);
    this.heroeBorrado = heroeBorrado;
    this.muestra = true; 
  }

 

}
