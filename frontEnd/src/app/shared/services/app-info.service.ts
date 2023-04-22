import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Estado Cidade';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
