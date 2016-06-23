import * as React from 'react';
import * as cn from 'classnames';

//   Class name for the styles sheets
const COMPONENT_CLASS_NAME = "ActionInput";

export interface IActionInputProps {
    icon?: string;
    onClose?: (value: string) => void;
}

export class ActionInput extends React.Component<IActionInputProps, { isOpened: boolean }> {
    element: HTMLElement;
    input: HTMLInputElement;
    icon: HTMLElement;
    constructor(props: IActionInputProps) {
        super(props);
        this.state = {
            isOpened: false
        };
    }
    render() {
        return <div className={COMPONENT_CLASS_NAME} ref={(c) => this.element = c}>
            {(() => {
                if (this.state.isOpened) {
                    return <input
                        type="text"
                        className=""
                        placeholder="Dojo name..."
                        onKeyDown={this.onInputKeydown.bind(this) }
                        ref={(c) => this.input = c}/>;
                } else {
                    return <i
                        className="material-icons"
                        onClick={this.onIconClick.bind(this) }
                        ref={(c) => this.icon = c}>
                        {this.props.icon || 'add'}
                    </i>;
                }
            })() }
        </div>;
    }

    onIconClick() {
        this.setState({ isOpened: true });
    }
    onInputKeydown(e: KeyboardEvent) {
        if (e.keyCode === 13) {
            this.setState({ isOpened: false });
            this.props.onClose(this.input.value);
        }
    }

    componentDidUpdate() {
        if (this.input) {
            this.input.focus();
        }
    }
}
