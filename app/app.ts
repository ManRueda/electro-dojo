import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, provide, OnInit, enableProdMode, OnDestroy } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router } from '@angular/router';
import { createStore, Unsubscribe } from 'redux';
const isDevelopment = require('electron-is-dev');

import { MainComponent } from './components/main.cmp';
import { HomeComponent } from './components/home.cmp';
import { store } from './redux/store';

if (isDevelopment) {
    require('devtron').install()
} else {
    enableProdMode();
}

@Component({
    selector: 'my-app',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([{ path: '/main', component: MainComponent },
    { path: '/home', component: HomeComponent }
])
export class AppComponent implements OnInit, OnDestroy {
    private unsubscribe: Unsubscribe;

    constructor(public router: Router) {
        this.unsubscribe = store.subscribe(() => {
            let state = store.getState();
            if (state.dojo.name){
                window.document.title = 'Node Dojo - ' + state.dojo.name;
            }
        });
    }
    ngOnInit() {
        this.router.navigate(['/home']);
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}
//Use the hash strategy to avoid issues with electron
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
