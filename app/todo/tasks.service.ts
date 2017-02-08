import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Task } from './task';

@Injectable()
export class TasksService {

    private tasksUrl = 'app/tasks';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    getTasks(): Observable<Task[]> {
        return this.http.get(this.tasksUrl)
                        .delay(2000)
                        .map((res: Response) => res.json().data as Task[])
                        .catch(this.handleError);
    }

    addTask(task: Task): Observable<Task[]> {
        return this.http.post(this.tasksUrl, JSON.stringify(task), {headers: this.headers})
                        .delay(2000)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    updateTask(task: Task): Observable<Task[]> {
        return Observable.throw("Not implemented");
    }

    getTask(id: number): Observable<Task> {
        return this.getTasks()
            .map(list => {
                return list.find(t => t.id === id);
            });
    }

    private extractData(res: Response) {
        console.log("Extracting data...");
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${err.status} - ${err.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}