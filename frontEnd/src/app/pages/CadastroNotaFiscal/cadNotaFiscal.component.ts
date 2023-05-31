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
  //NovoItem = new Item;

  constructor(private notaFiscalService: NotaFiscalService,
              private clienteService: ClienteService,
              private produtoService: ProdutoService,
              private itemService: ItemService) {
  }

  ngOnInit() {
    this.getNotas();
    this.getClientes();
    this.getProdutos();
    this.getItens();
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

  getProdutos() {
    this.produtoService.getProdutos().subscribe((dados) => {
      this.produtos = dados;
    });
  }

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

  /*
  getItens() {
    this.itemService.getItens().subscribe((dados) => {
      this.itens = dados;
    });
  }

  adicionarItem(novoItem: any) {
    console.log(novoItem)
    this.itemService.adicionarItem(novoItem).subscribe((item) => {
      this.itens.push(item);
      console.log(item)
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

  NotaSaving(event: any) {
    console.log(event);
    if(event.data == null){
      this.NovoItem = event.changes.data[0]
      console.log(this.NovoItem);
      event.data.setValue(event.changes.data[0]);
    }
    console.log(event.data);
  }

  onValueChangedProduto(data: any){
    console.log(data)
    /*
    for (let produto of this.produtos) {
      if (produto.id == data.id) {
        data = produto;
        return;
      }
    }
  }
 */

  valueChangeCliente(cliente: Cliente, data: any){
    data.setValue(cliente);
  }

  valueChangeProduto(produto: Produto, data: any){
    data.setValue(produto);
  }

  onInitNewRowNota(event:any){
    if(!event.data.itens){
      event.data.itens = [];
    }
  }

  dataSourceChangeItens(event: any, data: any){
    //console.log(event);
    //console.log(data);
    data.setValue(event);
  }

  onRowRemoved(event: any, data: any):void{
    console.log(event);
    console.log(data);
    //data.produto.setValue(data.data.produtos);
    const index = data.value.indexOf(event);
    if (index !== -1) {
      data.value.splice(index, 1);
    }
  }

  calcularValorTotal(itens: Item[]) {
    /*let total = 0;
    console.log(itens);
    for (const item of itens) {
      if (itens != null) {
        total += (<number>item.valor * <number>item.quantidade);
      }
    }
    return total;*/
  }
  getItens() {
    this.itemService.getItens().subscribe((dados) => {
      this.itens = dados;
    });
  }

}
