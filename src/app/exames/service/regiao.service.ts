import { Injectable } from '@angular/core';
import { Regiao } from '../model/regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  constructor() { }

  listRegioes(): Regiao[]{
    return[
      {id:1, regiao: "Norte", total: 15},
      {id:2, regiao: "Nordeste", total: 10},
      {id:2, regiao: "Sudeste", total: 200},
      {id:2, regiao: "Sul", total: 80},
      {id:2, regiao: "Centro-Oeste", total: 8}
      
    ];
  }
}
