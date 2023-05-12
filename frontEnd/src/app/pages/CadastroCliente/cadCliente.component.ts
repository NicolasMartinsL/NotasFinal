import {Component, OnInit} from '@angular/core';
import {ClienteService} from "../../shared/services/servicos/cliente.service";
import {Cliente} from "../../model/cliente";




@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadCliente.component.html',
  styleUrls: [ './cadCliente.component.scss' ]
})

export class CadClienteComponent implements OnInit{

  clientes: Cliente[] = [];
  constructor(private service: ClienteService) {}

  ngOnInit() {
    this.getClientes()
  }

  getClientes() {
    this.service.getClientes().subscribe((dados) => {
      this.clientes = dados;
    });
  }

  adicionarCliente(novoCliente: any) {
    this.service.adicionarCliente(novoCliente).subscribe((cliente) => {
      this.clientes.push(cliente);
    });
  }

  atualizarCliente(clienteNovo: Cliente) {
    console.log(clienteNovo);
    this.service.atualizarCliente(clienteNovo).subscribe((cliente)=>{
      cliente.id = clienteNovo.id
      cliente.nome = clienteNovo.nome
      cliente.codigo = clienteNovo.codigo
    });
    console.log(clienteNovo);
  }

  excluirCliente(cliente: Cliente) {
    console.log(cliente);
    this.service.excluirCliente(cliente).subscribe(() => {
      this.clientes = this.clientes.filter((c) => c !== cliente);
    });
  }

  atualizandoCliente(cliente: Cliente){
    console.log(cliente);
    //this.service.atualizarCliente(cliente).subscribe();
    //console.log(cliente);
  }
}
