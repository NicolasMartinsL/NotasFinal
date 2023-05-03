import { Cliente } from "./cliente";
import { Item } from "./item";

export class Nota {

    id?: number;

    numero?: number;

    data?: string;

    valor?: number;

    cliente?: Cliente;

    itens?: Item[];


    //constructor(value?: any) {}

  }
