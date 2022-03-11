import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';

import { ExamesRoutingModule } from './exames-routing.module';
import { ExamesComponent } from './exames/exames.component';
import { OcorrenciaService } from './service/ocorrencia.service';


@NgModule({
  declarations: [
    ExamesComponent
  ],
  imports: [
    CommonModule,
    ExamesRoutingModule,
    MatSortModule,
    MatCardModule
  ],
  providers:[
    OcorrenciaService
  ]
})
export class ExamesModule { }
