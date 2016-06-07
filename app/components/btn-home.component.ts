import { Component, Inject, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'btn-home',
    template: `<i class="material-icons md-36">home</i>`,
    styles: [`
        i {
            padding: 5px;
            cursor: pointer;
        }
        i:hover{
            color: #00897B;
        }
    `]
})
export class BtnHomeComponent {
    constructor(private location: Location) {

    }
}
