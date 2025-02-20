import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  tipo= 'teste';
  preco=1000;

  getFullprice(){
    setTimeout(() =>{
      console.log('Set Timeout');
      this.tipo='Simples';
    },4000);
    return 'R$' + this.preco + ',00/Mês';
  }
}

