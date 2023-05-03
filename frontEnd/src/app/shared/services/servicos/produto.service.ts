import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "src/app/model/produto";


@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private readonly link = '/api/produto';

  constructor(private httpClient: HttpClient) {
  }

  getProdutos(): Observable<Produto[]>{
    return this.httpClient.get<Produto[]>(this.link);
  }

  adicionarProduto(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.link, produto);
  }

  atualizarProduto(produto: Produto): Observable<Produto> {
    const url = `${this.link}/${produto.id}`;
    return this.httpClient.put<Produto>(url, produto);
  }

  excluirProduto(produto: Produto): Observable<Produto> {
    const url = `${this.link}/${produto.id}`;
    return this.httpClient.delete<Produto>(url);
  }
}
