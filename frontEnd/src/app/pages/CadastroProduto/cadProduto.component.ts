import {Component, OnInit} from '@angular/core';
import {ProdutoService} from "../../shared/services/servicos/produto.service";
import {Produto} from "../../model/produto";

@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadProduto.component.html',
  styleUrls: [ './cadProduto.component.scss' ]
})

export class CadProdutoComponent implements OnInit{

  produtos: Produto[] = [];
    constructor(private service: ProdutoService) {}

  ngOnInit() {
    this.service.getProdutos().subscribe(dados => {
      this.produtos = dados;
    });
  }
}
