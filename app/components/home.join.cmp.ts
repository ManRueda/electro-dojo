import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { BtnHomeComponent } from './btn-home.cmp';

@Component({
    selector: 'home-join',
    template: `
        <btn-home [routerLink]="['/home']"></btn-home>
        <div class="container join">
            <div>
                <input type="text" placeholder="Dojo ID..." [(ngModel)]="joinData.id">
                <input type="text" placeholder="Your name..." [(ngModel)]="joinData.name">
            </div>
            <span class="btn action" (click)="join()">Join</span>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, BtnHomeComponent]
})
export class HomeJoinComponen {
    joinData = {
        name: '',
        id: ''
    };

    constructor(private router: Router) {

    }

    join() {
        console.log(this.joinData);
    }
}
