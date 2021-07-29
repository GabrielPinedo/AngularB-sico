import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { heroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.moduel';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    heroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
