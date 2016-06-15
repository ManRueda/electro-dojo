import { combineReducers, createStore, Store, compose } from 'redux'
const isDevelopment = require('electron-is-dev');
import { dojoReducer, IDojo } from './dojoReducer'
import { kataReducer, IKata } from './kataReducer'

const devTools = <Function>require('remote-redux-devtools');

const totalReducer = combineReducers<IDojoStore>({
    dojo: dojoReducer,
    katas: kataReducer
})

export interface IDojoStore {
    dojo: IDojo,
    katas: Array<IKata>
}
let enhancer:any;
if (isDevelopment){
    enhancer = <any>compose(devTools({
        name: 'Electro Dojo', realtime: true,
        hostname: 'localhost', port: 6868,
        maxAge: 30
    }));
}

export const store = createStore<IDojoStore>(totalReducer, enhancer);
