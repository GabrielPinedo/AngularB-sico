import { Component } from "@angular/core";


@Component({
   selector: 'app-heroe',
   templateUrl: 'heroe.component.html'

})
export class heroeComponent{

    nombre: string = ' Ironman'
    edad: number = 45; 
    nombreNuevo: string = 'Super Man'
    
    obtenerNombre():string {
        return `
          ${this.nombre} - ${this.edad}
        `; 
    };
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    cambiarHeroe (heroe: string):void {
       this.nombre = heroe;
        
    }

    cambiarEdadHeroe (heroeEdad: number):void {
        this.edad = heroeEdad;
         
     }
    
}