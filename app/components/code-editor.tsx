import * as React from 'react';
const ace = (window as any).ace as Ace.Ace;

const COMPONENT_CLASS_NAME = "CodeEditor";

export interface ICodeEditorProps {
    code: string;
    language?: string;
    theme?: string;
    onChange?: (code: string) => void;
}

export interface ICodeEditorState {
    code: string;
    localChange: boolean;
}

export class CodeEditor extends React.Component<ICodeEditorProps, ICodeEditorState> {
    editorDOM: HTMLElement;
    private editor: Ace.Editor;

    constructor(props: ICodeEditorProps) {
        super(props);
        this.state = {
            code: this.props.code,
            localChange: false
        };
    }
    render() {
        return <div className={COMPONENT_CLASS_NAME}>
            <pre className="editor" ref={(c) => this.editorDOM = c}>
            </pre>
        </div>
    }

    shouldComponentUpdate(nextProps: ICodeEditorProps, nextState: ICodeEditorProps) {
        return this.editor.getValue() !== nextProps.code;
    }

    componentDidUpdate() {
        this.setEditorValue(this.props.code || '');
    }
    componentDidMount() {
        this.createEditor();
    }

    private setEditorValue(value: string) {
        this.detachEditorEvents();
        this.editor.setValue(value);
        this.attachEditorEvents();
    }

    private createEditor() {
        this.editor = ace.edit(this.editorDOM);
        this.editor.setTheme('ace/theme/' + (this.props.theme || 'monokai'));
        this.editor.session.setMode('ace/mode/' + (this.props.language || 'javascript'));
        this.setEditorValue(this.props.code || '')
    }

    private onChange = this.callback(() => {
        let code = this.editor.getValue();
        this.state.code = code;
        if (this.props.onChange) {
            this.props.onChange(code);
        }
    });

    private attachEditorEvents() {
        this.editor.on('change', this.onChange);
    }

    private detachEditorEvents() {
        this.editor.off('change', this.onChange);
    }

    private callback(fn: Function): Function {
        const that = this;
        return () => fn.apply(that);
    }
}
