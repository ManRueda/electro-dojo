import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit, Directive, Inject, ElementRef } from '@angular/core';

@Component({
    selector: 'code-editor',
    templateUrl: 'templates/codeEditor.component.html',
    styleUrls: ['styles/codeEditor.component.css']
})
export class CodeEditorComponent implements OnInit {
    constructor(
        public el: ElementRef) {
    }
    ngOnInit() {
        let realElement = this.el.nativeElement.querySelector('.editor');
        var editor = (<any>window).ace.edit(realElement);
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/typescript");
    }
}
