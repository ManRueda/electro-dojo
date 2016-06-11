import { Component, Input, Inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { Unsubscribe } from 'redux';

import { store } from '../redux/store';
import { IKata } from '../redux/kataReducer';

@Component({
    selector: 'katas-menu',
    templateUrl: 'templates/katasMenu.cmp.html',
    styleUrls: ['styles/katasMenu.cmp.css'],
    directives: [NgClass]
})
export class KatasMenu {
    @Input()
    katas: Array<IKata>;
    constructor() {
    }

    openKata() {
    }

}
