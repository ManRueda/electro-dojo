import * as React from 'react';
import { Link } from 'react-router'
const COMPONENT_CLASS_NAME = "HomeButton";

export interface IHomeButtonParams {
    path?: string
}

export class HomeButton extends React.Component<IHomeButtonParams, {}> {
    render() {
        return <div className={COMPONENT_CLASS_NAME}>
            <Link to={this.props.path || '/home'}>
                <i className="material-icons md-36">home</i>
            </Link>
        </div>;
    }
}
