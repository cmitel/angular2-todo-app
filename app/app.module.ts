import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderModule }  from './header/header.module';
import { ListModule }  from './todo/list.module';
import { RoutingModule }  from './routing/routing.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HeaderModule, ListModule, RoutingModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }