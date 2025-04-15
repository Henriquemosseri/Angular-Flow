import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-din',
  standalone: true,
  imports: [],
  templateUrl: './lista-din.component.html',
  styleUrl: './lista-din.component.css'
})
export class ListaDinComponent {
  tarefas=["Estudar Angular", "Fazer exercicios", "Revisar código"]
  deletar(index:number){
    this.tarefas.splice(index,1);
  }
}

