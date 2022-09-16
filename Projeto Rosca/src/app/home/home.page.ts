
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage:Storage) {
    this.storage.create();
  }

  ngOnInit(){
    this.atualizaLista();
  }

  variavel_lista = [];
  texto: string = "";
  preco: string = "";
  quanti: string = "";
  resultado: number = 0;
  aux = 0;

  async adiciona() {
    if (!(this.texto == ""  &&this.preco == "" && this.quanti == "")) {
      //this.variavel_lista.push("0", this.texto);

      this.variavel_lista.forEach(item => {
        if(parseInt(item[0]) > this.aux) {
          this.aux = parseInt(item[0]);
        }
      })
      this.aux = this.aux + 1;
      await this.storage.set(this.aux.toString(), [this.texto, this.preco,this.quanti]);
      this.atualizaLista();
     // this.resultado = this.resultado+parseInt(this.preco)parseInt(this.quanti);
      this.texto = "";
      this.preco = "";
      this.quanti = "";

    }


    if (this.texto == "") {

    } else{
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }

  }

  atualizaLista() {
    this.variavel_lista = [];
    this.resultado = 0;
    this.storage.forEach((value, key, index) => {
      this.variavel_lista.push([key, value]);
      this.resultado = this.resultado + (value[1]*value[2])
    })
  }

  async remove(indice) {
    //this.variavel_lista.splice(indice, 1)
    await this.storage.remove(indice);
    this.atualizaLista();
  }

  //ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

}
