import { Component, Inject, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'templates/home.component.html',
    styleUrls: ['styles/home.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
export class HomeComponent {
    modeCreate = false;
    modeJoin = false;
    constructor() {

    }

    join() {
        this.modeJoin = true;
    }

    create() {
        this.modeCreate = true;
    }
}
