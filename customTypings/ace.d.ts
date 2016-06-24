declare namespace Ace {
    export interface Ace {
        edit(container: any): Editor;
    }

    export interface Editor {
        setTheme(theme: string): void;
        session: EditorSession;
        on(event: string, handler: Function): void;
        off(event: string, handler: Function): void;
        getValue(): string;
        setValue(value: string, cursorPos?: number): void;
    }

    export interface EditorSession {
        setMode(mode: string): void;
    }
}
