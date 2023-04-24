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
    this.service.getClientes().subscribe(dados => {
      this.clientes = dados;
    });
  }

}
