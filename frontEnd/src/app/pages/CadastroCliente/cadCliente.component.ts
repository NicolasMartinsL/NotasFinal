import {Component, OnInit} from '@angular/core';
import {ClientesService} from "../../shared/services/servicos/clientes.service";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadCliente.component.html',
  styleUrls: [ './cadCliente.component.scss' ]
})

export class CadClienteComponent implements OnInit{

  clientes: Cliente[] = [];
  constructor(private service: ClientesService) {
  }

  ngOnInit() {
    this.service.getClientes().subscribe(dados => {
      this.clientes = dados;
      debugger
    });
  }

}
