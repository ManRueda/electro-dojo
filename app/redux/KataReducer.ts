import {KataActionType, IKata, IKataAction} from './KataActions'
import { Store } from 'redux';

export interface IKatasState {
    katas: Array<IKata>;
}

const initialState = <IKatasState>{
    katas: <Array<IKata>>[]
};
export function kataReducer(state = initialState, action: IKataAction): IKatasState {
    switch (action.type) {
        case KataActionType.Add:
            return {
                katas: state.katas.concat(<IKata>{
                    name: action.name,
                    current: action.current,
                    id: action.id
                })
            };
        case KataActionType.SetCurrent:
            return {
                katas: state.katas.map((k) => {
                    k.current = k.id === action.id;
                    return k;
                })
            };
        default:
            return state;
    }
}

export interface KataStore extends Store<IKatasState> {

}
