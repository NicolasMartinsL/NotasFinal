export class Cidade {

  id?: number;

  nome?: string;

  uf?: number;


  constructor(value?: any) {
    if(value) {
      this.id = value.id;
      this.nome = value.nome;
      //this.uf = value.uf;
    }
  }

}
