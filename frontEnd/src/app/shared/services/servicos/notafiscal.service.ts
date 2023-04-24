import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nota} from "src/app/model/nota";


@Injectable({
  providedIn: 'root'
})

export class NotaFiscalService {

  private readonly link = '/api/nota';

  constructor(private httpClient: HttpClient) {
  }

  getNotas(): Observable<Nota[]>{
    return this.httpClient.get<Nota[]>(this.link);
  }
}
