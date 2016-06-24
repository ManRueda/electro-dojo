import { StoreActionType, IAction } from './types';
import { IDojoStore } from './../store';

/*
    Interfaces with custom actions formats
*/
export interface IHydrateStateAction extends IAction {
    state: IDojoStore;
}

/*
    Actions generators
*/

// set the id of the dojo
export function HydrateState(state: IDojoStore): IHydrateStateAction {
    return {
        type: StoreActionType.HYDRATE_STATE,
        state
    };
}
