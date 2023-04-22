import { Component } from '@angular/core';
import {LojaService} from "../../shared/services/loja.service";
import {Nota} from "../../model/nota";

@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadNotaFiscal.component.html',
  styleUrls: [ './cadNotaFiscal.component.scss' ]
})

export class CadNotaFiscalComponent {

  notas: Nota[] = [];
  constructor(private service: LojaService) {
    this.service.getNotas().subscribe(dados => {
       this.notas = dados;
     });
  }

}
