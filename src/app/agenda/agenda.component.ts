import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone: true,
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css'],
  imports:[CommonModule, MatIconModule],
})
export class AgendaComponent implements OnInit {

  dataAtual: Date = new Date(); // Data Atual
  diasCalendario: Date[] = []; // Array para armazenar os dias do caledário

  ngOnInit() {
    this.construirCalendario(); // Chama a função ao inicializar o componente
  }

  construirCalendario() {
    const ano = this.dataAtual.getFullYear();
    const mes = this.dataAtual.getMonth();

    const primeiroDiaDaSemana = 1; // Segunda-feira (0= domingo)
    const ultimoDiaDaSemana = 0; //Domingo

    // Define o primeiro dia visível no calendário
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay()!== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate()- 1);
    }

    // Define o último dia visível no calendário
    const dataFinal = new Date(ano, mes + 1, 0); // Último dia do mês atual
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }

    // Preenche o array 'diasCalendario' com os dias entre 'dataInicial' e 'dataFinal'
    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      this.diasCalendario.push(new Date(data.getTime())); //Adiciona uma cópia da data ao array
    }



=======

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
>>>>>>> master
  }

}
