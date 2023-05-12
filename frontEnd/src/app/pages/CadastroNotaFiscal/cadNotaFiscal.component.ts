import {Component, OnInit} from '@angular/core';
import {NotaFiscalService} from "../../shared/services/servicos/notafiscal.service";
import {Nota} from "../../model/nota";
import {Item} from "../../model/item";

@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadNotaFiscal.component.html',
  styleUrls: [ './cadNotaFiscal.component.scss' ]
})

export class CadNotaFiscalComponent implements OnInit{

  notas: Nota[] = [];
  itens: Item[] = [];

  constructor(private service: NotaFiscalService) {}

  ngOnInit() {
    this.getNotas();
    this.getItens();
  }

  getItens() {
    this.service.getItens().subscribe((dados) => {
      this.itens = dados;
    });
  }

  getNotas() {
    this.service.getNotas().subscribe((dados) => {
      this.notas = dados;
    });
  }

  adicionarNota(novaNota: any) {
    this.service.adicionarNota(novaNota).subscribe((nota) => {
      this.notas.push(nota);
    });
  }

  atualizarNota(nota: Nota) {
    this.service.atualizarNota(nota).subscribe();
  }

  excluirNota(nota: Nota) {
    this.service.excluirNota(nota).subscribe(() => {
      this.notas = this.notas.filter((c) => c !== nota);
    });
  }
}
