import { KataActionType, IAction } from './actions/types';
import { IAddKataAction, IAddCodeKataAction, ISetCodeKataAction, ISetNotesKataAction, addKata, addCode, setCode, setNotes } from './actions/kataCreators';

export interface IKata {
    name: string;
    notes?: string;
    code?: IKataCode;
    id: number;
}

export interface IKataCode {
    language: string;
    code: string;
}
const initialState = <Array<IKata>>[];

export function kataReducer(state = initialState, action: IAction): Array<IKata> {
    switch (action.type) {
        case KataActionType.ADD:
            return [...state, {
                name: (<IAddKataAction>action).name,
                id: (<IAddKataAction>action).id,
                code: (<IAddKataAction>action).code
            }];
        case KataActionType.ADD_CODE:
            return state.map((kata, index) => {
                if (kata.id === (<IAddCodeKataAction>action).id) {
                    return Object.assign({}, kata, {
                        code: {
                            code: (<IAddCodeKataAction>action).code,
                            language: (<IAddCodeKataAction>action).language
                        }
                    });
                }
                return kata;
            });
        case KataActionType.SET_CODE:
            return state.map((kata, index) => {
                if (kata.id === (<ISetCodeKataAction>action).id) {
                    return Object.assign({}, kata, {
                        code: {
                            code: (<ISetCodeKataAction>action).code,
                            language: kata.code.language
                        }
                    });
                }
                return kata;
            });
        case KataActionType.SET_NOTES:
            return state.map((kata, index) => {
                if (kata.id === (<ISetNotesKataAction>action).id) {
                    return Object.assign({}, kata, {
                        notes: (<ISetNotesKataAction>action).notes
                    });
                }
                return kata;
            });
        default:
            return state;
    }
}
