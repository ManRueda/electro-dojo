import { Component, Inject, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
import { HomeMenuComponen } from './home.menu.cmp';
import { HomeCreateComponen } from './home.create.cmp';
import { HomeJoinComponen } from './home.join.cmp';

@Component({
    selector: 'home',
    template: `
        <div class="noselect">
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['styles/home.cmp.css'],
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    { path: '', component: HomeMenuComponen },
    { path: '/create', component: HomeCreateComponen },
    { path: '/join', component: HomeJoinComponen }
])
export class HomeComponent {
    constructor() {

    }
}
