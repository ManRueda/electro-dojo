import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit, Directive, Inject, ElementRef, Input, Output, EventEmitter } from '@angular/core';

const ace = <Ace.Ace>(<any>window).ace;

@Component({
    selector: 'code-editor',
    templateUrl: 'templates/codeEditor.cmp.html',
    styleUrls: ['styles/codeEditor.cmp.css']
})
export class CodeEditorComponent implements OnInit {
    private editor: Ace.Editor;

    @Input()
    code: string;

    @Input()
    language: string;

    @Input()
    theme: string;

    @Output('codeChange')
    codeChange = new EventEmitter();

    constructor(
        public el: ElementRef) {
    }
    ngOnInit() {
        let realElement = this.el.nativeElement.querySelector('.editor');

        this.editor = ace.edit(realElement);
        this.editor.setTheme('ace/theme/' + (this.theme || 'monokai'));
        this.editor.session.setMode('ace/mode/' + (this.language || 'javascript'));
        this.editor.setValue(this.code || '');
        this.attachEditorEvents();
    }

    private attachEditorEvents() {
        const that = this;
        this.editor.on('change', () => that.onCodeChange());
    }

    private onCodeChange() {
        this.code = this.editor.getValue();
        this.codeChange.emit(this.code);
    }
}
