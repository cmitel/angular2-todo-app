import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.html',
})
export class HeaderComponent implements OnInit {
    
    menus = ['Home', 'About'];

    constructor() {}

    ngOnInit() { }    
}