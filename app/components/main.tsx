import * as React from 'react';
import { Link } from 'react-router'
import * as cn from 'classnames';
import { connect } from 'react-redux';

import { CodeEditor } from './code-editor';
import { KatasMenu } from './katas-menu';
import { ActionInput } from './action-input';

import { addKata, setCode } from '../redux/actions/kataCreators';
import { setCurrentKata, setCurrentKataId } from '../redux/actions/dojoCreators';
import { IKata, IDojoStore } from '../redux/models';

//   Class name for the styles sheets
const COMPONENT_CLASS_NAME = "Main";


//   Interfaces to manage the connect React-Redux function
export interface IMainStateProps {
    katas: Array<IKata>,
    currentKata?: IKata,
    currentKataId?: number
}
export interface IMainDispatchProps {
    addKata: (name: string) => void;
    setCurrentKata: (kata: IKata) => void;
    setCurrentKataId: (id: number) => void;
    setCode: (id: number, code: string) => void;
}
export interface IMainProps extends React.Props<any>, IMainStateProps, IMainDispatchProps {
}

class MainPresent extends React.Component<IMainProps, { modalIsOpen: boolean }> {
    element: HTMLElement;
    render() {
        let currentKata = this.props.katas.filter(k => k.id === this.props.currentKataId)[0];
        return <div className={COMPONENT_CLASS_NAME} ref={(c) => this.element = c}>
            <KatasMenu items={this.props.katas} onChange={this.onCurrentKataChange.bind(this) }/>
            <div className="actions noselect">
                <ActionInput icon="add" onClose={this.onAddClose.bind(this) } />
            </div>
            <div className="content" >
                <div>
                    { currentKata ? <h1>{currentKata.name}</h1> : ''}
                    { currentKata ? <CodeEditor code={currentKata.code.code} onChange={this.onCodeChange.bind(this) }></CodeEditor> : ''}
                </div>
                <div className="notes">
                    <h3>Notes</h3>
                    <div className="textarea-scroller" >
                        {(() => {
                          if (currentKata){
                            return <div contentEditable="true" className="textarea">
                                {currentKata.note}
                            </div>;
                          }
                        })()}
                    </div>
                </div>
                <div className="dummy-notes">
                </div>
            </div>
        </div>;
    }

    onAddClose(value: string) {
        this.props.addKata(value);
    }

    onCurrentKataChange(kata: IKata) {
        this.props.setCurrentKataId(kata.id);
    }

    onCodeChange(code: string) {
        this.props.setCode(this.props.currentKataId, code);
    }
}

export var Main = connect<IMainStateProps, IMainDispatchProps, IMainProps>((state: IDojoStore) => {
    return {
        katas: state.katas,
        currentKata: state.dojo.current,
        currentKataId: state.dojo.currentId
    };
}, (dispatch: Function) => {
    return {
        addKata: (name: string) => dispatch(addKata(name)),
        setCurrentKata: (kata: IKata) => dispatch(setCurrentKata(kata)),
        setCode: (id: number, code: string) => dispatch(setCode(id, code)),
        setCurrentKataId: (id: number) => dispatch(setCurrentKataId(id))
    };
})(MainPresent);
