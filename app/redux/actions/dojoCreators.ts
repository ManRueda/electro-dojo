import { DojoActionType, IAction } from './types';

/*
    Interfaces with custom actions formats
*/
export interface ISetIdDojoAction extends IAction {
    id: string;
}
export interface ISetNameDojoAction extends IAction {
    name: string;
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
