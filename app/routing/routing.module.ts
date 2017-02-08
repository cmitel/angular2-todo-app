import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent }        from '../todo/list.component';
import { EditComponent }        from '../todo/edit.component';

const appRoutes: Routes = [
    { path: '',          redirectTo: '/home', pathMatch: 'full' },
    { path: 'home',      component: ListComponent },
    { path: 'edit/:id',  component: EditComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    declarations: [],
    providers: []
})
export class RoutingModule { }