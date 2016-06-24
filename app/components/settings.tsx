import * as React from 'react';
import * as cn from 'classnames';
import { connect } from 'react-redux';
import { remote } from 'electron';
import { writeFile, readFile } from 'fs';

import { IDojoStore } from '../redux/models';
import { hydrateState } from '../redux/actions/storeCreators';

//   Class name for the styles sheets
const COMPONENT_CLASS_NAME = "Settings";


//   Interfaces to manage the connect React-Redux function
export interface ISettingsStateProps {
    state: IDojoStore;
}
export interface ISettingsDispatchProps {
    hydrateState: (state: IDojoStore) => void;
}
export interface ISettingsProps extends React.Props<any>, ISettingsStateProps, ISettingsDispatchProps {
}

class SettingsPresent extends React.Component<ISettingsProps, { modalIsOpen: boolean }> {
    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }
    element: HTMLElement;
    render() {
        return <div className={COMPONENT_CLASS_NAME} ref={(c) => this.element = c}>
            <button onClick={this.onSaveClick.bind(this) }>Save state</button>
            <button onClick={this.onLoadClick.bind(this) }>Load state</button>
        </div>;
    }

    onLoadClick() {
        remote.dialog.showOpenDialog({
            title: 'Open state',
            filters: [{ name: 'JSON File', extensions: ['json'] }],
            properties: ['openFile']
        }, (fileName: string[]) => {
            if (fileName.length > 0) {
                readFile(fileName[0], 'utf-8', (err, data) => {
                    if (err) {
                        console.error(err);
                    } else {
                        this.props.hydrateState(JSON.parse(data));
                        (this.context as any).router.push('/main');
                        console.info('State loaded')
                    }
                });
            }
        });
    }
    onSaveClick() {
        remote.dialog.showSaveDialog({
            title: 'Save state'
        }, (fileName: string) => {
            let toSave = JSON.stringify(this.props.state);
            writeFile(fileName, toSave, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.info('state saved at: %s', fileName);
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
        hydrateState: (store) => dispatch(hydrateState(store))
    };
})(SettingsPresent);
