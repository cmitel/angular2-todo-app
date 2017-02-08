import { ActivatedRoute, Params }   from '@angular/router';
import { Component, OnInit, Input }        from '@angular/core';
import { Location }                 from '@angular/common';

import { TasksService }             from './tasks.service';

import { Task } from './task';

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId:     module.id,
    selector:    'app-show-todo',
    templateUrl:  'show-todo.component.html',
    styleUrls:    [ 'show-todo.css' ]
})
export class ShowTodoComponent implements OnInit {

    @Input()
    private task: Task;

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private tasksService: TasksService
    ) {}

    ngOnInit(): void {
        this.route
        .params
        .switchMap((p: Params) => this.tasksService.getTask(+p['id']))
        .subscribe((t: Task) => this.task = t);
    }

    goBack() {
        this.location.back();
    }
}