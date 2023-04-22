import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Estado} from "../../model/estado";
import {Cidade} from "../../model/cidade";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class IbgeService {

  private readonly ApiE = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

  constructor(private httpClient: HttpClient) { }

  listaEstados(): Observable<Estado[]>{
    return this.httpClient.get<Estado[]>(this.ApiE);
  }

  listaCidades(estadoCode: string):Observable<Cidade[]>{
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'+estadoCode+'/municipios';
    return this.httpClient.get<Cidade[]>(url);
  }

}
