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
  // itens: Item[] = [];
  // NovoItem = new Item;

  constructor(private notaFiscalService: NotaFiscalService,
              private clienteService: ClienteService,
              private produtoService: ProdutoService,
              private itemService: ItemService) {
  }

  ngOnInit() {
    this.getNotas();
    this.getClientes();
    this.getProdutos();
  }

  getNotas() {
    this.notaFiscalService.getNotas().subscribe((dados) => {
      this.notas = dados;
    });
  }

  getClientes() {
    this.clienteService.getClientes().subscribe((dados) => {
      this.clientes = dados;
    });
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }

  /* Salvando */
  adicionarNota(novaNota: any) {
    console.log(novaNota)

    this.notaFiscalService.adicionarNota(novaNota).subscribe((nota) => {
      this.notas.push(nota);
      console.log(nota)
    });
  }

  atualizarNota(nota: Nota) {
    this.notaFiscalService.atualizarNota(nota).subscribe();
  }

  excluirNota(nota: Nota) {
    this.notaFiscalService.excluirNota(nota).subscribe(() => {
      this.notas = this.notas.filter((c) => c !== nota);
    });
  }

  /* fim salvar*/

  onInitNewRowNota(event: any) {
    if(!event.data.itens){
      event.data.itens = [];
    }
  }

  atualizandoCliente(event: any) {
    for (let cliente of this.clientes) {
      if (cliente.id == event.data.cliente.id) {
        event.data.cliente = cliente;
        return;
      }
    }
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

  valueChangeCliente(cliente: Cliente, data: any) {
    data.setValue(cliente);
  }

  valueChangeProduto(produto: Produto, data: any) {
    data.setValue(produto)
  }

  ondataSourceChangeItens(event: any, data: any) {
    data.setValue(event);
  }

}
