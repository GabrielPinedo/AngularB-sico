import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
       <h1>CONTADOR </h1>
        <button (click)="acumularbase(base)">+{{aumento}} </button>
        <span> {{numero}}</span>
        <button (click)="acumularbase(- base )">- {{aumento}} </button>
  
  `

})


export class contadorComponent {

    numero: number = 10;
    base: number = 5;
    aumento: number = 5;


    acumular(valor: number) {
        this.numero += valor;
    }
    acumularbase(valor: number) {
        this.numero += valor;
    }
}