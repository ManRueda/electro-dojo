import { Component, Input, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Unsubscribe } from 'redux';

import { KataStore } from '../redux/KataReducer';
import { KataActions, IKata } from '../redux/KataActions';

@Component({
    selector: 'katas-menu',
    templateUrl: 'src/templates/katasMenu.component.html',
    styleUrls: ['src/styles/katasMenu.component.css'],
    directives: [NgClass]
})
export class KatasMenu {
    @Input()
    katas: Array<IKata>;
    constructor( @Inject('KataStore') private kataStore: KataStore, private kataActions: KataActions) {
    }

    openKata(kata: IKata) {
        this.kataStore.dispatch(this.kataActions.changeCurent(kata));
    }

}
