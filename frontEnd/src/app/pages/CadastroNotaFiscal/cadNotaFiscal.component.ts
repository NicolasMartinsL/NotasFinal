import {Component, OnInit} from '@angular/core';
import {NotaFiscalService} from "../../shared/services/servicos/notafiscal.service";
import {Nota} from "../../model/nota";
import {Item} from "../../model/item";
import {Cliente} from "../../model/cliente";
import {ClienteService} from "../../shared/services/servicos/cliente.service";
import {Produto} from "../../model/produto";
import {ProdutoService} from "../../shared/services/servicos/produto.service";
import {ItemService} from "../../shared/services/servicos/item.service";

@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadNotaFiscal.component.html',
  styleUrls: [ './cadNotaFiscal.component.scss' ]
})

export class CadNotaFiscalComponent implements OnInit {

  notas: Nota[] = [];
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  itens: Item[] = [];

  constructor(private notaFiscalService: NotaFiscalService,
              private clienteService: ClienteService,
              private produtoService: ProdutoService,
              private itemService: ItemService) {
  }

  ngOnInit() {
    this.getNotas();
    this.getClientes();
    this.getItens();
    this.getProdutos();
  }

  atualizandoCliente(event: any) {
    for (let cliente of this.clientes) {
      if (cliente.id == event.data.cliente.id) {
        event.data.cliente = cliente;
        return;
      }
    }
  }

  getClientes() {
    this.clienteService.getClientes().subscribe((dados) => {
      this.clientes = dados;
    });
  }

  getNotas() {
    this.notaFiscalService.getNotas().subscribe((dados) => {
      this.notas = dados;
    });
  }

  adicionarNota(novaNota: any) {
    this.notaFiscalService.adicionarNota(novaNota).subscribe((nota) => {
      this.notas.push(nota);
      console.log(nota)
    });
  }

  atualizarNota(nota: Nota) {
    debugger
    this.notaFiscalService.atualizarNota(nota).subscribe();
  }

  excluirNota(nota: Nota) {
    this.notaFiscalService.excluirNota(nota).subscribe(() => {
      this.notas = this.notas.filter((c) => c !== nota);
    });
  }

  getItens() {
    this.itemService.getItens().subscribe((dados) => {
      this.itens = dados;
    });
  }

  adicionarItem(novoItem: any) {
    this.itemService.adicionarItem(novoItem).subscribe((item) => {
      this.itens.push(item);
    });
  }

  atualizarItem(item: Item) {
    this.itemService.atualizarItem(item).subscribe();
  }

  excluirItem(item: Item) {
    this.itemService.excluirItem(item).subscribe(() => {
      this.itens = this.itens.filter((c) => c !== item);
    });
  }

  atualizandoProduto(event: any) {
    console.log(event)
    for (let produto of this.produtos) {
      if (produto.id == event.data.produto.id) {
        event.data.produto = produto;
        console.log(event.data.produto)
        return;
      }
    }
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  prepararNota(event: any) {
    if (event.id === null) {
      event.editorOptions.setValue('');//id na sequencia
    }
    if (event.nota === null) {
      event.editorOptions.setValue('');//1 ou dois
    }
    if (event.produto === null) {
      event.editorOptions.setValue('');//talvez
    }
  }

}
