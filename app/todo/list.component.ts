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
        // if (isEnterPressed && this.newTask && this.newTask.length) {
        //     this.tasks.push(new Task(this.newTask, Date.now()));
        //     this.newTask = '';
        // }
    }

    removeTask(index: number) {
        // if (index >= 0) {
        //     this.tasks.splice(
        //         index,
        //         1
        //     );
        // }
    }

    // displayTask(selectedId: number) {
    //     // this.router.navigate(['/detail', hero.id]);
    // }
}