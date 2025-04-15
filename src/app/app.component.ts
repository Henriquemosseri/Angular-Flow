import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MesesComponent } from './components/meses/meses.component';
import { ListaComponent } from './components/lista/lista.component';
import { IdadeComponent } from './components/idade/idade.component';
import { ListaDinComponent } from './components/lista-din/lista-din.component';
import { MultCasesComponent } from './components/mult-cases/mult-cases.component';
import { ObjetosComponent } from './components/objetos/objetos.component';
import { NumStrComponent } from './components/num-str/num-str.component';
import { LoginComponent } from './components/login/login.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MesesComponent, ListaComponent, IdadeComponent, ListaDinComponent, MultCasesComponent, ObjetosComponent, NumStrComponent, LoginComponent, ProdutosComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividade1';
}

