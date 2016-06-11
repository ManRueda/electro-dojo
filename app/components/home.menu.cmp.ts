import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'home-menu',
    template: `
        <div class="container main">
            <a [routerLink]="['/home/create']">
                <span class="btn create" >Create room</span>
            </a>
            <a [routerLink]="['/home/join']">
                <span class="btn join" >Join room</span>
            </a>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class HomeMenuComponen {
    constructor() {
    }
}
