import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderModule }  from './header/header.module';
import { ListModule }    from './todo/list.module';
import { RoutingModule } from './routing/routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';

import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports:      [ BrowserModule, HeaderModule, ListModule, RoutingModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    []
})
export class AppModule { }