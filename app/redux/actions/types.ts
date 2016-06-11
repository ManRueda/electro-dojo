export enum KataActionType {
    ADD,
    ADD_CODE,
    SET_CODE
}

export enum DojoActionType {
    SET_ID,
    SET_NAME
}

export interface IAction {
    type: any;
    [propName: string]: any;
}
