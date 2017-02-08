import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { ListComponent }    from './list.component';
import { EditComponent }    from './edit.component';

import { TasksService }     from './tasks.service';

@NgModule({
    imports:         [ BrowserModule, FormsModule, HttpModule ],
    exports:         [ ListComponent, EditComponent ],
    declarations:    [ ListComponent, EditComponent ],
    providers:       [ TasksService ]
})
export class ListModule { }