import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, provide, OnInit, enableProdMode } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router } from '@angular/router';
import { createStore } from 'redux';
const isDevelopment = require('electron-is-dev');

import { MainComponent } from './components/main.component';
import { HomeComponent } from './components/home.component';
import { kataReducer, KataStore } from './redux/KataReducer';
import { KataActions } from './redux/KataActions';

if (isDevelopment) {
    require('devtron').install()
} else {
    enableProdMode();
}

const kataStore = createStore(kataReducer);

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([{
    path: '/main',
    component: MainComponent,
}])
@Routes([{
    path: '/home',
    component: HomeComponent,
}])
export class AppComponent implements OnInit {
    constructor(public router: Router) {
        var dada = new KataActions();

    }
    ngOnInit() {
        this.router.navigate(['/home']);
    }
}
//Use the hash strategy to avoid issues with electron
bootstrap(AppComponent, [
    provide('KataStore', { useValue: kataStore }),
    KataActions,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
