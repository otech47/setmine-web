import React, { PropTypes } from 'react'
import { Motion, spring, presets } from 'react-motion'
import Icon from './Icon'
import Modal from './Modal'
import Button from './Button'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { toggleModal } from '../actions/environment'

const margin = {
    marginRight: '2rem'
}

function LoginOverlay({ cancel, login, open, style }) {
    return (
        <Modal open={open}>
            <div className='LoginOverlay flex-column'>
                <h5>Create an account & enjoy these awesome features</h5>
                <ul>
                    <li className='flex-row'>
                        <Icon fixed style={margin}>star-o</Icon>
                        <p>Save your favorite sets for easy listening</p>
                    </li>
                    <li className='flex-row'>
                        <Icon fixed style={margin}>unlock-alt</Icon>
                        <p>Unlock exclusive music at beacon locations</p>
                    </li>
                    <li className='flex-row'>
                        <Icon fixed style={margin}>thumbs-up</Icon>
                        <p>Recommended sets & events from your favorite artists</p>
                    </li>
                </ul>
                <footer>
                    <Button 
                        className='facebook'
                        solid
                        icon='social-facebook'
                        onClick={login}
                    >
                        Sign Up With Facebook
                    </Button>
                    <Button 
                        className='nope'
                        solid 
                        onClick={cancel}
                    >
                        No Thanks
                    </Button>
                </footer>
            </div>
        </Modal>
    )
}

LoginOverlay.contextTypes = {
    router: PropTypes.object
}

LoginOverlay.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func
}

function mapDispatchToProps(dispatch) {
    return {
        login() {
            dispatch(login())
        },
        cancel() {
            dispatch(toggleModal())
        }
    }
}

export default connect(null, mapDispatchToProps)(LoginOverlay)