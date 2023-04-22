import {NgModule, Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DxSelectBoxModule} from 'devextreme-angular';
import {IbgeService} from "../../services/ibge.service";
import {Estado} from "../../../model/estado";
import {Cidade} from "../../../model/cidade";


@Component({
  selector: 'app-cidadeestado',
  templateUrl: './cidade-estado.component.html',
  styleUrls: ['./cidade-estado.component.scss']
})
export class CidadeEstadoComponent implements OnInit {

  estados: Estado[] = [];
  cidades: Cidade[] = [];

  @Input()
  estado: Estado = new Estado();

  @Output() estadoChange: EventEmitter<Estado> = new EventEmitter<Estado>();

  @Input()
  cidade?: Cidade = new Cidade();

  @Output() cidadeChange: EventEmitter<Cidade> = new EventEmitter<Cidade>();


  constructor(private service: IbgeService) {
  }

  selecionarEstado(e: any) {
    this.estadoChange.emit(e.value);
    this.service.listaCidades(String(e.value.id)).subscribe(dados => {
    this.cidades = dados;
    this.cidade = new Cidade();
    });
  }
  selecionarCidade(e: any) {
    if (e.value) {
      this.cidadeChange.emit(e.value);
      this.cidade = new Cidade(e.value);
    } else {
      this.cidade = new Cidade();
    }
    
  }
  ngOnInit() {
    this.service.listaEstados().subscribe(dados => {
      this.estados = [];
      for (let dado of dados){
        let e = new Estado(dado);
        this.estados.push(e);

        if(this.estado && this.estado.id === e.id){
          this.estado = e;
        }
      }
    });
  }
  
/*
  getDisplayEstado(e:any){
    if(e){
      return e.id +' - '+ e.sigla +" - "+ e.nome;
    }
  }
 */
  
}


@NgModule({
  imports: [
    BrowserModule,
    DxSelectBoxModule,
  ],
  declarations: [CidadeEstadoComponent],
  exports: [CidadeEstadoComponent],
})

export class CidadeEstadoModule {}
