import * as React from 'react';
import { connect } from 'react-redux';
import { IDojoStore} from './../redux/store';

//   Interfaces to manage the connect React-Redux function
export interface IGlobalSetterStateProps {
    dojoName?: string;
}
export interface IGlobalSetterDispatchProps { }
export interface IGlobalSetterProps extends React.Props<any>, IGlobalSetterStateProps, IGlobalSetterDispatchProps {

}

class GlobalSetterPresent extends React.Component<IGlobalSetterProps, {}> {
    render() {
        document.title = 'Electro Dojo' + (this.props.dojoName !== '' ? ' - ' + this.props.dojoName : '');
        return <div></div>;
    }
}

export var GlobalSetter = connect<IGlobalSetterStateProps, IGlobalSetterDispatchProps, IGlobalSetterProps>((state: IDojoStore) => {
    return {
        dojoName: state.dojo.name
    };
}, (dispatch: Function) => {
    return {};
})(GlobalSetterPresent);
