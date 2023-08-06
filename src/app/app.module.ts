import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AloMundoComponent } from './alo-mundo/alo-mundo.component';
import { AngularTopComponent } from './angular-top/angular-top.component';

@NgModule({
  declarations: [
    AppComponent,
    AloMundoComponent,
    AngularTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
