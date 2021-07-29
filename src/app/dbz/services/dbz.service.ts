import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService { 


    private _personajes: Personaje[] = [
        {
        nombre: 'Goku',
        power: 12000,
        },
    
        {
          nombre: 'Vegetta',
          power: 1150,
        }
    
    ];

    get Personajes(): Personaje[]{
        return [...this._personajes];
    }
    constructor (){
        console.log('Servicio inicializado')
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);

    }

}