"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ListComponent = (function () {
    function ListComponent() {
        this.tasks = [];
    }
    ListComponent.prototype.ngOnChanges = function () { };
    ListComponent.prototype.ngOnInit = function () {
        this.tasks.push('This is an example of todo task');
    };
    ListComponent.prototype.ngDoCheck = function () { };
    ListComponent.prototype.ngAfterContentInit = function () { };
    ListComponent.prototype.ngAfterContentChecked = function () { };
    ListComponent.prototype.ngAfterViewInit = function () { };
    ListComponent.prototype.ngAfterViewChecked = function () { };
    ListComponent.prototype.ngOnDestroy = function () { };
    // Public functionals methodes
    ListComponent.prototype.addTask = function (isEnterPressed) {
        if (isEnterPressed && this.newTask && this.newTask.length) {
            this.tasks.push(this.newTask);
            this.newTask = '';
        }
    };
    ListComponent.prototype.removeTask = function (index) {
        if (index >= 0) {
            this.tasks.splice(index, 1);
        }
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-list',
            templateUrl: 'list.html',
            styleUrls: ['list.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map