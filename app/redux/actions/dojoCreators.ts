import { DojoActionType, IAction } from './types';
import { IKata } from './../kataReducer';

/*
    Interfaces with custom actions formats
*/
export interface ISetIdDojoAction extends IAction {
    id: string;
}
export interface ISetNameDojoAction extends IAction {
    name: string;
}
export interface ISetCurrentKataAction extends IAction {
    kata: IKata;
}
export interface ISetCurrentKataIdAction extends IAction {
    id: number
}

/*
    Actions generators
*/

// set the id of the dojo
export function setId(id: string): ISetIdDojoAction {
    return {
        type: DojoActionType.SET_ID,
        id
    };
}

// set the name of the dojo
export function setName(name: string): ISetNameDojoAction {
    return {
        type: DojoActionType.SET_NAME,
        name
    };
}

// set the current kata
export function setCurrentKata(kata: IKata): ISetCurrentKataAction {
    return {
        type: DojoActionType.SET_CURRENT,
        kata
    };
}

export function setCurrentKataId(id: number): ISetCurrentKataIdAction {
    return {
        type: DojoActionType.SET_CURRENT_ID,
        id
    };
}
