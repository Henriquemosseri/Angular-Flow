import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mult-cases',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './mult-cases.component.html',
  styleUrl: './mult-cases.component.css'
})
export class MultCasesComponent {
statusAtual:string=Status.Pendente;
statusEnum= Status;
}
export enum Status{
  Pendente='pendente',
  Enviado='enviado',
  Entregue='entregue'
}