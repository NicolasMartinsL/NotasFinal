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
    this.getProdutos();
    }

  getProdutos() {
    this.service.getProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  adicionarProduto(novoProduto: any) {
    this.service.adicionarProduto(novoProduto).subscribe((produto) => {
      this.produtos.push(produto);
    });
  }

  atualizarProduto(produto: Produto) {
    this.service.atualizarProduto(produto).subscribe();
  }

  excluirProduto(produto: Produto) {
    this.service.excluirProduto(produto).subscribe(() => {
      this.produtos = this.produtos.filter((c) => c !== produto);
    });
  }
}
