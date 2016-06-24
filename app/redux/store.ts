import { combineReducers, createStore, Store, compose, Reducer } from 'redux'
const isDevelopment = require('electron-is-dev');
import { dojoReducer, IDojo } from './dojoReducer'
import { kataReducer, IKata } from './kataReducer'
import { StoreActionType, IAction } from './actions/types';
import { IHydrateStateAction } from './actions/storeCreators';

const devTools = <Function>require('remote-redux-devtools');

const totalReducer = combineReducers<IDojoStore>({
    dojo: dojoReducer,
    katas: kataReducer
});

export interface IDojoStore {
    dojo: IDojo,
    katas: Array<IKata>
}
let enhancer: any;
if (isDevelopment) {
    enhancer = <any>compose(devTools({
        name: 'Electro Dojo', realtime: true,
        hostname: 'localhost', port: 6868,
        maxAge: 30
    }));
}

export const store = createStore<IDojoStore>(makeHydratable(totalReducer), enhancer);

function makeHydratable(reducer: Reducer<IDojoStore>): Reducer<IDojoStore> {
    return function(state: any, action: IAction) {
        switch (action.type) {
            case StoreActionType.HYDRATE_STATE:
                return reducer((<IHydrateStateAction>action).state, action);
            default:
                return reducer(state, action);
        }
    }
}
