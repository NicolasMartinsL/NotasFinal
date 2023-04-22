import { Component } from '@angular/core';
import {LojaService} from "../../shared/services/loja.service";
import {Cliente} from "../../model/cliente";

@Component({
  selector: 'app-Cadastros',
  templateUrl: 'cadCliente.component.html',
  styleUrls: [ './cadCliente.component.scss' ]
})

export class CadClienteComponent {
  constructor(private service: LojaService) {
  }
  jsonC: string = 'src/assets/Clientes.json';
  clientes: Cliente[] = [];
  cliente2? : Cliente = new Cliente();

}
