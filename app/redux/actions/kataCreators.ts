import { KataActionType, IAction } from './types';

/*
    Interfaces with custom actions formats
*/
export interface IAddKataAction extends IAction {
    name: string;
}
export interface IAddCodeKataAction extends IAction {
    id: string;
    code: string;
    language: string;
}
export interface ISetCodeKataAction extends IAction {
    id: string;
    code: string;
}


/*
    Actions generators
*/
// add a new empty kata
export function addKata(name: string): IAddKataAction {
    return {
        type: KataActionType.ADD,
        name
    };
}

// add code to the kata
export function addCode(id: string, code: string, language: string): IAddCodeKataAction {
    return {
        type: KataActionType.ADD_CODE,
        code,
        language,
        id
    };
}

// set the code content to the kata
export function setCode(id: string, code: string): ISetCodeKataAction {
    return {
        type: KataActionType.SET_CODE,
        code,
        id
    };
}
