import { Component, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaetariaService } from '../service/faixaetaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';


@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.scss']
})

export class ExamesComponent implements OnInit {

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regioesService: RegiaoService,
    private faixaEtariaService: FaixaetariaService
  ) { }

  ngOnInit(): void {
    this.ocorrencia_exame = this.ocorrenciaService.listOcorrencias();
    this.regioes = this.regioesService.listRegioes();
    this.faixaetarias = this.faixaEtariaService.listFaixaEtaria();
    }
}
