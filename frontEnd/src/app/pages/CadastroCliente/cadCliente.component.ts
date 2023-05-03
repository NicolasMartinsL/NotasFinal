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

  atualizarCliente(cliente: Cliente) {
    this.service.atualizarCliente(cliente).subscribe();
  }

  excluirCliente(cliente: Cliente) {
    this.service.excluirCliente(cliente).subscribe(() => {
      this.clientes = this.clientes.filter((c) => c !== cliente);
    });
  }

}
