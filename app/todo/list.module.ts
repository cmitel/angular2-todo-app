import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list.component';
import { EditComponent } from './edit.component';

@NgModule({
    imports:         [ BrowserModule, FormsModule ],
    exports:         [ ListComponent, EditComponent ],
    declarations:    [ ListComponent, EditComponent ],
    providers:       [],
})
export class ListModule { }