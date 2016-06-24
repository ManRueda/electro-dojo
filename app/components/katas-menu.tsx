import * as React from 'react';
import { Link } from 'react-router'
import * as cn from 'classnames';

import { IKata } from '../redux/models';

//   Class name for the styles sheets
const COMPONENT_CLASS_NAME = "KatasMenu";

export interface IKatasMenuProps {
    items: Array<IKata>;
    onChange?: (kata: IKata) => void;
    activeId?: number;
}

export class KatasMenu extends React.Component<IKatasMenuProps, {}> {
    element: HTMLElement;
    render() {
        let items = this.props.items || [];
        return <div className={COMPONENT_CLASS_NAME} ref={(c) => this.element = c}>
            <ul className="kata-list">
                {items.map((kata, index) => {
                    let classes = ['kata'];
                    if (kata.id === this.props.activeId) classes.push('active');
                    classes.push(index % 2 === 0 ? 'even' : 'odd');
                    return <li
                        className={cn(classes) }
                        key={kata.id}
                        onClick={_ => this.onKataClick(kata) }
                        >
                        <span data-id={kata.id}>{kata.name}</span>
                    </li>
                }) }
            </ul>
        </div>;
    }

    onKataClick(kata: IKata) {
        if (this.props.onChange) {
            this.props.onChange(kata);
        }
    }
}
