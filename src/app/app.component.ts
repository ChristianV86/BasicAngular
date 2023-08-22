import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
