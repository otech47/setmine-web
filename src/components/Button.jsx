import React, {PropTypes} from 'react';
import Ink from 'react-ink';
import Icon from './Icon';

const {func, string, bool, object} = PropTypes;

export default function Button({onClick, className, children, outline, icon, solid}, {router, push}) {

    return (
        <div className={'Button' + (solid ? ' solid' : '') + (outline ? ' outline' : '')} onClick={() => setTimeout(onClick, 100)}>
            {icon && <Icon style={{marginRight: '1rem' }}>{icon}</Icon>}
            <p>{children}</p>
            <Ink/>
        </div>
    );
}

Button.PropTypes = {
    onClick: func,
    className: string,
    // solid or outlined button
    outline: bool.isRequired,
    solid: bool.isRequired,
    // ionicons classname for adding an icon
    icon: string
}

Button.contextTypes = {
    router: object,
    push: func
};