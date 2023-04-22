import {Estado} from "../../model/estado";
import {Component} from "@angular/core";
import { Cidade } from "src/app/model/cidade";


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
  
  estadoPai: Estado = new Estado();
  cidadePai: Cidade = new Cidade();
  estadoMae: Estado = new Estado();
  cidadeMae: Cidade = new Cidade();
  
  
  constructor() {
    this.estadoPai.id = 31;
    this.estadoPai.sigla = 'MG';
    this.estadoPai.nome = 'Minas Gerais';

    //this.cidadePai.id = 3102605;
    //this.cidadePai.nome = 'Andradas';
    //this.cidadePai.uf = this.estadoPai.id;

    this.estadoMae.id = 13;
    this.estadoMae.sigla = 'AM';
    this.estadoMae.nome = 'Amazonas';

    //this.cidadeMae.id = 1300607;
    //this.cidadeMae.nome = 'Benjamin Constant';
    //this.cidadeMae.uf = this.estadoMae.id;
  }

}
