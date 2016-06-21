import { DojoActionType, IAction } from './actions/types';
import { ISetIdDojoAction, ISetNameDojoAction, ISetCurrentKataAction, ISetCurrentKataIdAction } from './actions/dojoCreators';
import { IKata } from './kataReducer';

export interface IDojo {
    id: string;
    name: string;
    current?: IKata;
    currentId?: number;
}
const initialState = <IDojo>{
    id: '',
    name: ''
};

export function dojoReducer(state = initialState, action: IAction): IDojo {
    switch (action.type) {
        case DojoActionType.SET_ID:
            return Object.assign({}, state, {
                id: (<ISetIdDojoAction>action).id
            });
        case DojoActionType.SET_NAME:
            return Object.assign({}, state, {
                name: (<ISetNameDojoAction>action).name
            });
        case DojoActionType.SET_CURRENT:
            return Object.assign({}, state, {
                current: (<ISetCurrentKataAction>action).kata
            });
        case DojoActionType.SET_CURRENT_ID:
            return Object.assign({}, state, {
                currentId: (<ISetCurrentKataIdAction>action).id
            });
        default:
            return state;
    }
}
