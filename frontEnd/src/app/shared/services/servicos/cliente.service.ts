import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "src/app/model/cliente";


@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  private readonly link = '/api/cliente';

  constructor(private httpClient: HttpClient) {
  }

  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.link);
  }
}
