import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { HardsoftsComponent } from '../hardsofts/hardsofts.component';
import { PresentacionComponent } from '../presentacion/presentacion.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';
import { SobremieducacionComponent } from '../sobremieducacion/sobremieducacion.component';

const routes: Routes = [
  {path:'',
  redirectTo:'presentacion',
  pathMatch:'full',},
  {path:'presentacion', component: PresentacionComponent},
  {path: 'sobremi', component:SobremieducacionComponent},
  {path:'skills', component:HardsoftsComponent,},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'body', component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
