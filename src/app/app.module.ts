import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import {LoginComponent} from "./components/user/login/login.component";
import { NavbarComponent } from './components/shered/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NosotrosComponent,
    NoticiasComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
