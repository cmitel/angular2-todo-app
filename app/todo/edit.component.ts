import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TasksService } from './tasks.service';
import { Task } from './task';

import 'rxjs/add/observable/timer';
import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'app-edit',
    templateUrl: 'edit.html',
    styleUrls: [ 'edit.css' ]
})

export class EditComponent implements OnInit {

    task: Task;
    isSuccess: boolean = false;
    isError: boolean = false;

    constructor(
        private location: Location,
        private tasksService: TasksService,
        private route: ActivatedRoute
        ) {}

    ngOnInit(): void {
        this.route
            .params
            .switchMap((p: Params) => this.tasksService.getTask(+p['id']))
            .subscribe((t: Task) => this.task = t);
    }

    goBack(): void {
        this.location.back();
    }

    update(): void {
        if (this.task.description && this.task.description.length > 0) {
            this.tasksService.updateTask(this.task)
                .subscribe(() => this.saveSuccess(), () => this.saveError());
        }
    }

    saveSuccess(): void {
        this.isSuccess = true;
        Observable.timer(1500).subscribe(() => this.isSuccess = false);
    }

    private saveError() {
        this.isError = true;
        Observable.timer(500).subscribe(() => this.isError = false);
    }
}