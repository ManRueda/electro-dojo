import { Component, Inject, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '@angular/router';
import { BtnHomeComponent } from './btn-home.component';

@Component({
    selector: 'home',
    templateUrl: 'templates/home.component.html',
    styleUrls: ['styles/home.component.css'],
    directives: [ROUTER_DIRECTIVES, BtnHomeComponent],
    providers: [ROUTER_PROVIDERS]
})
export class HomeComponent {
    modeCreate = false;
    modeJoin = false;

    joinData = {
        id: '',
        name: ''
    };
    createData = {
        name: ''
    };

    constructor() {
    }

    showJoin() {
        this.modeJoin = true;
    }

    showCreate() {
        this.modeCreate = true;
    }

    showHome() {
        this.modeJoin = false;
        this.modeCreate = false;
    }

    join() {
        alert(JSON.stringify(this.joinData));
    }

    create() {
        alert(JSON.stringify(this.createData));
    }
}
