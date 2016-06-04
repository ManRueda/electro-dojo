import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, Inject, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes } from '@angular/router';
import { Unsubscribe } from 'redux';

import { KataStore } from '../redux/KataReducer';
import { KataActions, IKata } from '../redux/KataActions';
import { KatasMenu } from './katasMenu.component';
import { CodeEditorComponent } from './codeEditor.component';

@Component({
    selector: 'main',
    templateUrl: 'src/templates/main.component.html',
    styleUrls: ['src/styles/main.component.css'],
    directives: [ROUTER_DIRECTIVES, CodeEditorComponent, KatasMenu],
    providers: [ROUTER_PROVIDERS]
})
export class MainComponent implements OnDestroy {
    private unsubscribe: Unsubscribe;
    private katas: Array<IKata>;
    private currentKata: IKata;

    constructor( @Inject('KataStore') private kataStore: KataStore,
        private kataActions: KataActions) {

        this.unsubscribe = this.kataStore.subscribe(() => {
            let state = this.kataStore.getState();

            this.katas = state.katas;
            this.currentKata = this.katas.filter(k => k.current)[0];
        });
    }
    showEditor: boolean = false;

    addKata() {
        this.kataStore.dispatch(this.kataActions.addKata(Date.now().toString()));
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}
