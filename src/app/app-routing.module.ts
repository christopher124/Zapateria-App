import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioComponent} from "../app/components/inicio/inicio.component"
import {NosotrosComponent} from "../app/components/nosotros/nosotros.component"
import {NoticiasComponent} from "../app/components/noticias/noticias.component"
import {LoginComponent} from "../app/components/user/login/login.component"

const routes: Routes = [

  {path: 'inicio', component: InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
