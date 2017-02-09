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

    getTasks(slowy: boolean = false): Observable<Task[]> {
        var src = this.http.get(this.tasksUrl);
        if (slowy) {
            src = src.delay(slowy === true ? 2000 : 0);
        }
        return src.map((res: Response) => res.json().data as Task[]).catch(this.handleError);
    }

    addTask(task: Task): Observable<Task[]> {
        return this.http.post(this.tasksUrl, JSON.stringify(task), {headers: this.headers})
                        .delay(1500)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    updateTask(task: Task): Observable<Task> {
        const url = `${this.tasksUrl}/${task.id}`;
        return this.http.put(url, JSON.stringify(task), {headers: this.headers})
                        .delay(1000)
                        .map(() => task)
                        .catch(this.handleError);
    }

    getTask(id: number): Observable<Task> {
        return this.getTasks()
            .map((list: Task[]) => {
                return list.find(t => t.id === id);
            });
    }

    deleteTask(id: number): Observable<boolean> {
        const url = `${this.tasksUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .map(() => true)
        .catch(this.handleError);
    }

    /*
        PRIVATE METHODES
    */

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