import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamesComponent } from './exames/exames.component';

const routes: Routes = [
  {
    path: '',
    component: ExamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamesRoutingModule { }
