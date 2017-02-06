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

import {Task} from './task';

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
    private tasks: Array<Task> = [];
    private newTask: string;

    constructor() { }

    ngOnChanges() {}

    ngOnInit() { 
        this.tasks.push(
            new Task('This is an example of todo task')
        );
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
            this.tasks.push(new Task(this.newTask));
            this.newTask = '';
        }
    }

    removeTask(index: number) {
        if (index >= 0) {
            this.tasks.splice(
                index,
                1
            );
        }
    }
}