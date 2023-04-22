export class Estado {

  id?: number;

  sigla?: string;

  nome?: string;

  
  constructor(value?: any) {
    if(value) {
      this.id = value.id;
      this.sigla = value.sigla;
      this.nome = value.nome;
    }
  }

}
