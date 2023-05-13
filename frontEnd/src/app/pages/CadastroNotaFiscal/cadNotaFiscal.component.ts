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

export class CadNotaFiscalComponent implements OnInit{

  notas: Nota[] = [];
  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  itens: Item[] = [];

  constructor(private service: NotaFiscalService,
              private service2: ClienteService,
              private service3: ProdutoService,
              private service4: ItemService) {}

  ngOnInit() {
    this.getNotas();
    this.getClientes();
    this.getItens();
    this.getProdutos();
  }

  atualizandoCliente(event: any){
    debugger
    for (let cliente of this.clientes){
      if (cliente.id == event.data.cliente.id){
        event.data.cliente =cliente;
        return;
      }
    }
  }
  getClientes() {
    this.service2.getClientes().subscribe((dados) => {
      this.clientes = dados;
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

  getItens() {
    this.service4.getItens().subscribe((dados) => {
      this.itens = dados;
    });
  }

  adicionarItem(novoItem: any) {
    this.service4.adicionarItem(novoItem).subscribe((item) => {
      this.itens.push(item);
    });
  }

  atualizarItem(item: Item) {
    this.service4.atualizarItem(item).subscribe();
  }

  excluirItem(item: Item) {
    this.service4.excluirItem(item).subscribe(() => {
      this.itens = this.itens.filter((c) => c !== item);
    });
  }

  atualizandoProduto(event: any){
    debugger
    for (let produto of this.produtos){
      if (produto.id == event.data.produto.id){
        event.data.produto =produto;
        return;
      }
    }
  }

  getProdutos() {
    this.service3.getProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }
}
