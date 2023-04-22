import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../../model/cliente";
import {Produto} from "../../model/produto";
import {Nota} from "../../model/nota";


const produtos: Produto[] = [{
  id: 1,
  codigo: 243,
  descricao: "algum produto",
  valor: 1000
},{
  id: 2,
  codigo: 645,
  descricao: "produto qualquer",
  valor: 1000
}];

@Injectable({
  providedIn: 'root'
})
export class LojaService {
  constructor(private httpClient: HttpClient) { }

  getCliente(){
    return this.httpClient.get<Cliente>('src/assets/Clientes.json')
  }

  getNotas(): Observable<Nota[]> {
    return this.httpClient.get<Nota[]>('src/assets/Notas.json');
  }

  getProducts(){
    return produtos;
  }

}
