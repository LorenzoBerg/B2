import { Component } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  variavel_lista = [];
  texto: string = "";
  preco: string = "0";
  variavel_preco = [];
  resultado: number = 0;
  termo_1: string = "";

  adiciona() {
    if (!(this.texto == "" && this.preco == "0")) {
      this.variavel_lista.push(this.texto);
      this.variavel_preco.push(this.preco);
      this.texto = "";
      this.preco = "0";
      this.soma();
    }
      /*
    if (this.texto == "") {

    } else{
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }*/

  }

  soma() {
    this.resultado = 0;
    this.variavel_preco.forEach(soma => {
      this.resultado = this.resultado + parseInt(soma);
    })
  }


  remove(indice) {
    this.variavel_lista.splice(indice, 1)
    this.variavel_preco.splice(indice, 1)
    this.soma();
  }

  //*ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

}
