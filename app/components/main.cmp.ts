import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, Inject, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '@angular/router';
import { Unsubscribe } from 'redux';

import { store } from '../redux/store';
import { IKata } from '../redux/kataReducer';
import { addKata } from '../redux/actions/kataCreators';
import { KatasMenu } from './katasMenu.cmp';
import { CodeEditorComponent } from './codeEditor.cmp';

@Component({
    selector: 'main',
    templateUrl: 'templates/main.cmp.html',
    styleUrls: ['styles/main.cmp.css'],
    directives: [ROUTER_DIRECTIVES, CodeEditorComponent, KatasMenu],
    providers: [ROUTER_PROVIDERS]
})
export class MainComponent implements OnDestroy {
    private unsubscribe: Unsubscribe;
    private katas: Array<IKata>;
    private currentKata: IKata;

    constructor() {

        this.unsubscribe = store.subscribe(() => {
            let state = store.getState();

            this.katas = state.katas;
        });
    }
    showEditor: boolean = false;

    addKata() {
        store.dispatch(addKata(Date.now().toString()));
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}
