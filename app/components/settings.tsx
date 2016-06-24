import * as React from 'react';
import * as cn from 'classnames';
import { connect } from 'react-redux';
import { remote } from 'electron';
import { writeFile } from 'fs';

import { IDojoStore } from '../redux/models';

//   Class name for the styles sheets
const COMPONENT_CLASS_NAME = "Settings";


//   Interfaces to manage the connect React-Redux function
export interface ISettingsStateProps {
    state: IDojoStore;
}
export interface ISettingsDispatchProps {
}
export interface ISettingsProps extends React.Props<any>, ISettingsStateProps, ISettingsDispatchProps {
}

class SettingsPresent extends React.Component<ISettingsProps, { modalIsOpen: boolean }> {
    element: HTMLElement;
    render() {
        return <div className={COMPONENT_CLASS_NAME} ref={(c) => this.element = c}>
            <button onClick={this.onOpenClick.bind(this) }>Open file</button>
        </div>;
    }

    onOpenClick() {
        remote.dialog.showSaveDialog({
            title: 'Save state'
        }, (fileName: string) => {
            let toSave = JSON.stringify(this.props.state);
            writeFile(fileName, toSave, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.debug('state saved at: %s', fileName);
                }
            });
        });
    }
}

export var Settings = connect<ISettingsStateProps, ISettingsDispatchProps, ISettingsProps>((state: IDojoStore) => {
    return {
        state: state
    };
}, (dispatch: Function) => {
    return {
    };
})(SettingsPresent);
