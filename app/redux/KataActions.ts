export enum KataActionType {
    Add,
    SetCurrent
}

export interface IKata {
    name: string;
    current: boolean;
    id: number;
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
}
