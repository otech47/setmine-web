import React, { PropTypes } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Base from './Base'

const Modal = ({ open, width, style, children }, {push}) => {
    const top = open ? 0 : -100
    const motionStyle = {
        yShift: spring(top, presets.gentle)
    }

    return (
        <Motion style={motionStyle}>
            {
                ({ yShift }) => (
                    <div className='Modal' style={Object.assign({}, style, {
                        top: `${yShift}vh`
                    })}>
                        <section className='flex-column'>
                            {children}
                        </section>
                    </div>
                )
            }
        </Motion>
    )
}

Modal.propTypes = {
    // modal contents. must be a single node
    children: PropTypes.node.isRequired,
    // show/hide the modal
    open: PropTypes.bool.isRequired,
    // instance-specific styling
    style: PropTypes.object,
    // modal width
    width: PropTypes.string
}
Modal.defaultProps = {
    width: '420px'
}

Modal.contextTypes = {
    push: PropTypes.func
}

export default Modal