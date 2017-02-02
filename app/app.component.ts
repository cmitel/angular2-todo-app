import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.html',
})
export class AppComponent implements OnInit { 
  name = 'Angular';  

  constructor() {}

  ngOnInit() {}
}