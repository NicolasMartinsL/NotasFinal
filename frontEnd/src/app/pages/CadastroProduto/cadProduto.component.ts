import { Component } from '@angular/core';
import {LojaService} from "../../shared/services/loja.service";
import {Produto} from "../../model/produto";

@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadProduto.component.html',
  styleUrls: [ './cadProduto.component.scss' ]
})

export class CadProdutoComponent {

  produtos: Produto[] = [];
    constructor(private service: LojaService) {
      this.produtos = service.getProducts();
    }

}
