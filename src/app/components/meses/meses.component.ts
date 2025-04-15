import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-meses',
  imports: [FormsModule],
  templateUrl: './meses.component.html',
  styleUrl: './meses.component.css'
})
export class MesesComponent {
    numero:number=3;

}
