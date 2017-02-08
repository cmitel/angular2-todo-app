import { Component, OnInit } from '@angular/core';

import { Task } from './task';

@Component({
    moduleId:     module.id,
    selector:    'app-show-todo',
    templateUrl:  'show-todo.component.html',
    styleUrls:    [ 'show-todo.css' ]
})
export class ShowTodoComponent implements OnInit {

    private task : Task = new Task('default test task', 22);

    constructor() {}

    ngOnInit(): void {}
}