import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaComponent } from './lista/lista.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { BrawlStarModule } from './brawl-star/brawl-star.module';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ListaComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    BrawlStarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
