export enum KataActionType {
    Add,
    SetCurrent,
    AddCode,
    SetCode
}

export interface IKata {
    name: string;
    current: boolean;
    note?: string;
    code?: IKataCode;
    id: number;
}

export interface IKataCode {
    language: string;
    code: string;
}

export interface IKataAction extends IKata {
    type: KataActionType;
}

export class KataActions {
    private nextId: number;
    constructor() {
        this.nextId = 0;
    }

    addKata(name: string): IKataAction {
        return {
            type: KataActionType.Add,
            id: this.nextId++,
            current: false,
            name: name
        };
    }

    changeCurent(kata: IKata): IKataAction {
        return {
            type: KataActionType.SetCurrent,
            id: kata.id,
            current: true,
            name: kata.name
        };
    }

    setCode(kata: IKata, code: string): IKataAction {
        if (kata.code === undefined) {
            let earlyExist = <IKataAction>kata
            earlyExist.type = KataActionType.SetCode;
            return earlyExist;
        }
        return {
            type: KataActionType.SetCode,
            id: kata.id,
            current: kata.current,
            name: kata.name,
            code: {
                code: code,
                language: kata.code.language
            }
        };
    }

    addCode(kata: IKata, language: string, code: string): IKataAction {
        return {
            type: KataActionType.AddCode,
            id: kata.id,
            current: kata.current,
            name: kata.name,
            code: {
                code: code,
                language: language
            }
        };
    }


}
