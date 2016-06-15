import { Component, Input, Inject, OnDestroy } from '@angular/core';
import { NgClass } from '@angular/common';
import { Unsubscribe } from 'redux';

import { store, IDojoStore } from '../redux/store';
import { IKata } from '../redux/kataReducer';
import { IDojo } from '../redux/dojoReducer';
import { setCurrentKata } from '../redux/actions/dojoCreators';

@Component({
    selector: 'katas-menu',
    templateUrl: 'templates/katasMenu.cmp.html',
    styleUrls: ['styles/katasMenu.cmp.css'],
    directives: [NgClass]
})
export class KatasMenu implements OnDestroy {
    private unsubscribe: Unsubscribe;
    state: IDojoStore;

    @Input()
    katas: Array<IKata>;

    constructor() {
        // initial state load
        this.state = store.getState();

        this.unsubscribe = store.subscribe(() => this.state = store.getState());
    }

    openKata(kata: IKata) {
        store.dispatch(setCurrentKata(kata));
    }

    ngOnDestroy() {
        this.unsubscribe();
    }

}
