import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }        from '../todo/list.component';
import { EditComponent }        from '../todo/edit.component';
import { ShowTodoComponent }    from '../todo/show-todo.component';

const appRoutes: Routes = [
    { path: '',          redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',      component: ListComponent },
    { path: 'edit/:id',  component: EditComponent },
    { path: 'view/:id',  component: ShowTodoComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    declarations: [],
    providers: []
})
export class RoutingModule { }