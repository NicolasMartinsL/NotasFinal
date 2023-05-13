import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../../../model/item";


@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private readonly link = '/api/item';

  constructor(private httpClient: HttpClient) {}

  getItens(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(this.link);
  }

  adicionarItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.link, item);
  }

  atualizarItem(item: Item): Observable<Item> {
    return this.httpClient.put<Item>(this.link, item);
  }

  excluirItem(item: Item): Observable<Item> {
    const url = `${this.link}/${item.id}`;
    return this.httpClient.delete<Item>(url);
  }
}
