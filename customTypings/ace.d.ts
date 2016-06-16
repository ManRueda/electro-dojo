declare namespace Ace {
    export interface Ace {
        edit(container: any): Editor;
    }

    export interface Editor {
        setTheme(theme: string);
        session: EditorSession;
        on(event: string, handler: Function);
        getValue(): string;
        setValue(value: string, cursorPos?: number);
    }

    export interface EditorSession {
        setMode(mode: string);
    }
}
