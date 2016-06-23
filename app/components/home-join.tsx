import * as React from 'react';
import { Link } from 'react-router'
import * as cn from 'classnames';
import { connect } from 'react-redux';

import { HomeButton } from './home-button';
import { setName } from './../redux/actions/dojoCreators';

//   Class name for the styles sheets
const COMPONENT_CLASS_NAME = "HomeJoin";


//   Interfaces to manage the connect React-Redux function
export interface IHomeJoinStateProps { }
export interface IHomeJoinDispatchProps {
    setName: (name: string) => void;
}
export interface IHomeJoinProps extends React.Props<any>, IHomeJoinStateProps, IHomeJoinDispatchProps {

}

class HomeJoinPresent extends React.Component<IHomeJoinProps, {}> {
    element: HTMLElement;
    idInput: HTMLInputElement;
    nameInput: HTMLInputElement;
    render() {
        return <div className={COMPONENT_CLASS_NAME} ref={(c) => this.element = c}>
            <HomeButton/>
            <div className="container join" onKeyPress={this.onKeyPress}>
                <div>
                    <input type="text" className="ed-input" placeholder="Dojo ID..." ref={(c) => this.idInput = c}/>
                    <input type="text" className="ed-input" placeholder="Your name..." ref={(c) => this.nameInput = c}/>
                </div>
                <span className="btn action" onClick={this.joinAction.bind(this) }>Join</span>
            </div>
        </div>;
    }

    joinAction() {
        this.props.setName(this.nameInput.value);
    }
    onKeyPress(e: KeyboardEvent) {
        if (e.keyCode === 13) {
            this.joinAction();
        }
    }
}

export var HomeJoin = connect<IHomeJoinStateProps, IHomeJoinDispatchProps, IHomeJoinProps>((state) => {
    return {};
}, (dispatch: Function) => {
    return {
        setName: (name: string) => dispatch(setName(name))
    };
})(HomeJoinPresent);
