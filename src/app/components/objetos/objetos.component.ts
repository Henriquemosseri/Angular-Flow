import { Component } from '@angular/core';

@Component({
  selector: 'app-objetos',
  imports: [],
  standalone: true,
  templateUrl: './objetos.component.html',
  styleUrl: './objetos.component.css'
})
export class ObjetosComponent {
usuarios=[{nome:"Ana", idade: 25},{nome:"Carlos", idade: 30}]
}
