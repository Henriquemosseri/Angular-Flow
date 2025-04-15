import { Component} from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  valor1: number | null = null;
  valor2: number | null = null;
  operacao: string = 'soma';
  resultado: number | null = null;
  erro: string | null = null;

  calcular() {
    // Limpar mensagens anteriores
    this.resultado = null;
    this.erro = null;

    // Verificar se os valores foram preenchidos
    if (this.valor1 === null || this.valor2 === null) {
      this.erro = 'Por favor, preencha ambos os valores.';
      return;
    }

    // Usar @switch para selecionar a operação
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.valor1 + this.valor2;
        break;
      case 'subtracao':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'multiplicacao':
        this.resultado = this.valor1 * this.valor2;
        break;
      case 'divisao':
        if (this.valor2 === 0) {
          this.erro = 'Erro: divisão por zero!';
        } else {
          this.resultado = this.valor1 / this.valor2;
        }
        break;
      default:
        this.erro = 'Operação inválida.';
    }
  }
}
