import { DojoActionType, IAction } from './actions/types';
import { setId, setName, ISetIdDojoAction, ISetNameDojoAction } from './actions/dojoCreators';

export interface IDojo {
    id: string;
    name: string;
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
        default:
            return state;
    }
}
