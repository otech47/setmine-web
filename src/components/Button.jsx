import React, { PropTypes } from 'react'
import Ink from 'react-ink'
import classNames from 'classnames'
import Icon from './Icon'

export default function Button({ onClick, className, children, outline, icon, solid }, { router, push, dispatch }) {
    const buttonClass = classNames('Button', className, {
        solid,
        outline
    })

    return (
        <div className={buttonClass} onClick={() => setTimeout(onClick, 100)}>
            {icon && <Icon>{icon}</Icon>}
            <p>{children}</p>
            <Ink/>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    // solid or outlined button
    outline: PropTypes.bool,
    solid: PropTypes.bool.isRequired,
    icon: PropTypes.string
}

Button.contextTypes = {
    router: PropTypes.object,
    push: PropTypes.func,
    dispatch: PropTypes.func
}