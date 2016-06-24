import * as React from 'react';
import { Link } from 'react-router'
import * as cn from 'classnames';

import { connect } from 'react-redux';

import { HomeButton } from './home-button';

const COMPONENT_CLASS_NAME = "Home";

export class Home extends React.Component<{}, {}> {
    render() {
        return <div className={COMPONENT_CLASS_NAME}>
            <div className="container main">
                <Link to="/create">
                    <span className="btn create" >Create room</span>
                </Link>
                <Link to="/join">
                    <span className="btn join" >Join room</span>
                </Link>
            </div>
            <Link to="/settings">
                <i className="material-icons setings">settings</i>
            </Link>
        </div>;
    }

}
