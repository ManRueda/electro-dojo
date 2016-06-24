import { KataActionType, IAction } from './types';

/*
    Interfaces with custom actions formats
*/
export interface IAddKataAction extends IAction {
    name: string;
    id: number;
    code?: {
        code: string;
        language: string;
    }
}
export interface IAddCodeKataAction extends IAction {
    id: number;
    code: string;
    language: string;
}
export interface ISetCodeKataAction extends IAction {
    id: number;
    code: string;
}
export interface ISetNotesKataAction extends IAction {
    id: number;
    notes: string;
}


/*
    Actions generators
*/
// add a new empty kata
export function addKata(name: string): IAddKataAction {
    return {
        type: KataActionType.ADD,
        id: Date.now(),
        name,
        code: {
            code: '',
            language: ''
        }
    };
}

// add code to the kata
export function addCode(id: number, code: string, language: string): IAddCodeKataAction {
    return {
        type: KataActionType.ADD_CODE,
        code,
        language,
        id
    };
}

// set the code content to the kata
export function setCode(id: number, code: string): ISetCodeKataAction {
    return {
        type: KataActionType.SET_CODE,
        code,
        id
    };
}

// set the notes content to the kata
export function setNotes(id: number, notes: string): ISetNotesKataAction {
    return {
        type: KataActionType.SET_NOTES,
        notes,
        id
    };
}
