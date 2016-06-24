export class KataActionType {
    public static ADD = "KATA_ADD";
    public static ADD_CODE = "KATA_ADD_CODE";
    public static SET_CODE = "KATA_SET_CODE";
    public static SET_NOTES = "KATA_SET_NOTES";
}

export class DojoActionType {
    public static SET_ID = "DOJO_SET_ID";
    public static SET_NAME = "DOJO_SET_NAME";
    public static SET_CURRENT = "DOJO_SET_CURRENT";
    public static SET_CURRENT_ID = "DOJO_SET_CURRENT_ID";
}

export class StoreActionType {
    public static HYDRATE_STATE = "STORE_HYDRATE_STATE";
}

export interface IAction {
    type: any;
    [propName: string]: any;
}
