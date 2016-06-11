import { combineReducers, createStore, Store } from 'redux'
import { dojoReducer, IDojo } from './dojoReducer'
import { kataReducer, IKata } from './kataReducer'

const totalReducer = combineReducers<IDojoStore>({
    dojo: dojoReducer,
    katas: kataReducer
})

export interface IDojoStore {
    dojo: IDojo,
    katas: Array<IKata>
}

export const store = createStore<IDojoStore>(totalReducer);
