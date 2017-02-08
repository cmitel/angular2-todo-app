import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { RouterModule }     from '@angular/router';

import { ListComponent }    from './list.component';
import { EditComponent }    from './edit.component';
import { ShowTodoComponent }    from './show-todo.component';

import { TasksService }     from './tasks.service';

@NgModule({
    imports:         [ BrowserModule, FormsModule, HttpModule, RouterModule ],
    exports:         [ ListComponent, EditComponent, ShowTodoComponent ],
    declarations:    [ ListComponent, EditComponent, ShowTodoComponent ],
    providers:       [ TasksService ]
})
export class ListModule { }