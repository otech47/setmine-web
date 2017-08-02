import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import { injectGlobal } from 'styled-components'

import configureStore from './store'
import App from './components/App';

const isProduction = process.env.NODE_ENV === 'production'
const Router = isProduction ? BrowserRouter : HashRouter

// styling
import './css/index.less'
import { colors } from './ui'
import AvenirLight from './fonts/Avenir-Light.ttf'
import AvenirRoman from './fonts/Avenir-Roman.ttf'
import AvenirMedium from './fonts/Avenir-Medium.ttf'
import AvenirHeavy from './fonts/Avenir-Heavy.ttf'

injectGlobal`
    @font-face {
        font-family: Avenir Light;
        src: url(${AvenirLight});
    }

    @font-face {
        font-family: Avenir Roman;
        src: url(${AvenirRoman});
    }

    @font-face {
        font-family: Avenir Medium;
        src: url(${AvenirMedium});
    }

    @font-face {
        font-family: Avenir Heavy;
        src: url(${AvenirHeavy});
    }

    html {
        background: ${colors.white};
        font-size: 8px;
        font-family: Avenir Roman;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100vw;
        overflow-x: hidden;
    }

    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    a {
        color:inherit;
        background-color: transparent;
        text-decoration:none;
        cursor: pointer;
        &:hover, &:active {
            color:inherit;
            outline: 0;
        }
    }

    button,input,textarea {
        color: inherit;
        font: inherit;
        margin: 0;
    }

    button, input[type='button'] {
        cursor: pointer;
    }

    input, input:focus {
        outline: 0;
    }
`

const store = configureStore()

render(
    <AppContainer>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)

// mixpanel.track("Page Load")

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(
            <AppContainer>
                <Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
            </AppContainer>,
            document.getElementById('root')
        )
    })
}