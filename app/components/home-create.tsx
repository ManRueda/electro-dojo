import * as React from 'react';
import { Link } from 'react-router'
import * as cn from 'classnames';
import { connect } from 'react-redux';

import { HomeButton } from './home-button';
import { setName } from './../redux/actions/dojoCreators';

//   Class name for the styles sheets
const COMPONENT_CLASS_NAME = "HomeCreate";


//   Interfaces to manage the connect React-Redux function
export interface IHomeCreateStateProps { }
export interface IHomeCreateDispatchProps {
    setName: (name: string) => void;
}
export interface IHomeCreateProps extends React.Props<any>, IHomeCreateStateProps, IHomeCreateDispatchProps {

}



class HomeCreatePresent extends React.Component<IHomeCreateProps, {}> {
    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }

    element: HTMLElement;
    nameInput: HTMLInputElement;
    render() {
        return <div className={COMPONENT_CLASS_NAME} ref={(c) => this.element = c}>
            <HomeButton/>
            <div className="container create" onKeyDown={this.onKeyDown.bind(this) }>
                <div>
                    <input type="text" className="ed-input" placeholder="Dojo name..." ref={(c) => this.nameInput = c}/>
                </div>
                <span className="btn action" onClick={this.createAction.bind(this) }>Create</span>
            </div>
        </div>;
    }

    createAction() {
        this.props.setName(this.nameInput.value);
        (this.context as any).router.push('/main')
    }
    onKeyDown(e: KeyboardEvent) {
        if (e.keyCode === 13) {
            this.createAction();
        }
    }
}

export var HomeCreate = connect<IHomeCreateStateProps, IHomeCreateDispatchProps, IHomeCreateProps>((state) => {
    return {};
}, (dispatch: Function) => {
    return {
        setName: (name: string) => dispatch(setName(name))
    };
})(HomeCreatePresent);
