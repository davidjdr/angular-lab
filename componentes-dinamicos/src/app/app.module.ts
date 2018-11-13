import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DinamicoComponent } from './components/dinamico/dinamico.component';
import { InyectableComponent } from './components/inyectable/inyectable.component';

@NgModule({
  declarations: [
    AppComponent,
    DinamicoComponent,
    InyectableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    InyectableComponent
  ]
})
export class AppModule { }
