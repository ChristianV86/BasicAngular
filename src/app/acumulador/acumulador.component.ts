import { Component } from '@angular/core';

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html',
  styleUrls: ['./acumulador.component.scss']
})
export class AcumuladorComponent {
  title: string = 'Primera Semana:';

  numero: number = 1;

  duplicar(){
    this.numero = this.numero*2;
  }

  triplicar(){
    this.numero = this.numero*3;
  }

  reiniciar(){
    this.numero = 1;
  }
}
