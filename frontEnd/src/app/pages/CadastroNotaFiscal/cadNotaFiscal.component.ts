import {Component, OnInit} from '@angular/core';
import {NotaFiscalService} from "../../shared/services/servicos/notafiscal.service";
import {Nota} from "../../model/nota";

@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadNotaFiscal.component.html',
  styleUrls: [ './cadNotaFiscal.component.scss' ]
})

export class CadNotaFiscalComponent implements OnInit{

  notas: Nota[] = [];
  constructor(private service: NotaFiscalService) {}

  ngOnInit() {
    this.service.getNotas().subscribe(dados => {
      this.notas = dados;
    });
  }
}
