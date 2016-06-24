import * as React from 'react';
import * as cn from 'classnames';
import { connect } from 'react-redux';

import { IDojoStore } from '../redux/models';

//   Class name for the styles sheets
const COMPONENT_CLASS_NAME = "Settings";


//   Interfaces to manage the connect React-Redux function
export interface ISettingsStateProps {
}
export interface ISettingsDispatchProps {
}
export interface ISettingsProps extends React.Props<any>, ISettingsStateProps, ISettingsDispatchProps {
}

class SettingsPresent extends React.Component<ISettingsProps, { modalIsOpen: boolean }> {
    element: HTMLElement;
    render() {
        return <div className={COMPONENT_CLASS_NAME} ref={(c) => this.element = c}>
        </div>;
    }
}

export var Settings = connect<ISettingsStateProps, ISettingsDispatchProps, ISettingsProps>((state: IDojoStore) => {
    return {
    };
}, (dispatch: Function) => {
    return {
    };
})(SettingsPresent);
