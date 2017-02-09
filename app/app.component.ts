import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.html',
  styleUrls: [ 'app.css' ]
})
export class AppComponent implements OnInit { 
  name = 'Angular';  

  constructor() {}

  ngOnInit() {}
}