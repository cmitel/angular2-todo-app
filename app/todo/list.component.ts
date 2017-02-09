import { 
    Component,
    OnInit, 
    OnChanges, 
    OnDestroy,
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked, 
    AfterViewInit, 
    AfterViewChecked 
} from '@angular/core';

import { TasksService } from './tasks.service';

import {Task} from './task';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/timer';

@Component({
    moduleId:     module.id,
    selector:    'app-list',
    templateUrl:  'list.html',
    styleUrls:    [ 'list.css' ]
})
export class ListComponent 
implements  OnChanges, 
            OnInit, 
            DoCheck, 
            AfterContentInit, 
            AfterContentChecked, 
            AfterViewInit, 
            AfterViewInit, 
            AfterViewChecked,
            OnDestroy 
{
    private tasks: Observable<Task[]>;
    private newTask: string;
    private hasTasks: boolean = false;
    private successMsg: string = '';

    constructor(private tasksService: TasksService) { }

    ngOnChanges() {}

    ngOnInit() {
        this.tasks = this.tasksService.getTasks();
    }

    ngDoCheck() { }
    ngAfterContentInit() { }
    ngAfterContentChecked() { }
    ngAfterViewInit() { }
    ngAfterViewChecked() { }
    ngOnDestroy() { }

    // Public functionals methodes

    addTask(isEnterPressed: boolean) {
        if (isEnterPressed && this.newTask && this.newTask.length) {

            let t = new Task(this.newTask, Date.now());

            this.tasksService.addTask(t)
            .subscribe(() => {
                this.tasks = this.tasksService.getTasks();
                this.newTask = '';

                this.successMsg = `The has been well created with ID : ${t.id}`;
                Observable.timer(2500).subscribe(() => this.successMsg = '', () => this.successMsg = '');
            });
        }
    }

    removeTask(taskId: number) {
        this.tasksService.deleteTask(taskId)
        .subscribe(() => {
            this.tasks = this.tasksService.getTasks();
            this.newTask = '';

            this.successMsg = `The has been well deleted`;
            Observable.timer(2500).subscribe(() => this.successMsg = '', () => this.successMsg = '');
        });
    }
}