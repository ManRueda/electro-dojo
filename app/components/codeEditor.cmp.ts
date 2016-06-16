import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, OnInit, Directive, Inject, ElementRef, Input, Output, EventEmitter, OnChanges } from '@angular/core';

const ace = <Ace.Ace>(<any>window).ace;

@Component({
    selector: 'code-editor',
    templateUrl: 'templates/codeEditor.cmp.html',
    styleUrls: ['styles/codeEditor.cmp.css']
})
export class CodeEditorComponent implements OnInit, OnChanges {
    private editor: Ace.Editor;
    private onChanging: boolean;

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

    ngOnChanges() {
        if (this.editor && this.editor.getValue() !== this.code) {
            this.onChanging = true;
            this.editor.setValue(this.code || '');
        }
    }

    private attachEditorEvents() {
        this.editor.on('change', this.callback(this.onCodeChange));
    }

    private onCodeChange() {
        if (this.onChanging) {
            return this.onChanging = false;
        }
        this.code = this.editor.getValue();
        this.codeChange.emit(this.code);
    }

    private callback(fn: Function): Function {
        const that = this;
        return () => fn.apply(that);
    }
}
