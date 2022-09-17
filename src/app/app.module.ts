import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuronovaComponent } from './euronova/euronova.component';

import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    EuronovaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
