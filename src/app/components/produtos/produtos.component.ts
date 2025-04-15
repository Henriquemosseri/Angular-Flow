import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  standalone: true,
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

  produtos=[{nome: "Notebook", preco:3000, promocao:true}, {nome: "Mouse", preco:50, promocao:false}]
  
}
