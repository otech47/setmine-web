import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
// import { injectGlobal } from 'styled-components'

import configureStore from './store'
import routes from './routes'

const isProduction = process.env.NODE_ENV === 'production'
const history = isProduction ? browserHistory : hashHistory
// history.listen(location => mixpanel.track(location.pathname))

// styling
import './styles/index.less'
// import { colors } from './ui'
// import AvenirLight from './fonts/Avenir-Light.ttf'
// import AvenirRoman from './fonts/Avenir-Roman.ttf'
// import AvenirMedium from './fonts/Avenir-Medium.ttf'
// import AvenirHeavy from './fonts/Avenir-Heavy.ttf'

// injectGlobal`
//     @font-face {
//         font-family: Avenir Light;
//         src: url(${AvenirLight})
//     }

//     @font-face {
//         font-family: Avenir Roman;
//         src: url(${AvenirRoman})
//     }

//     @font-face {
//         font-family: Avenir Medium;
//         src: url(${AvenirMedium})
//     }

//     @font-face {
//         font-family: Avenir Heavy;
//         src: url(${AvenirHeavy})
//     }

//     html {
//         background: ${colors.white};
//         font-size: 8px;
//         font-family: Avenir Roman;
//     }

//     body {
//         margin: 0;
//         padding: 0;
//         width: 100vw;
//         overflow-x: hidden;
//     }

//     * {
//         -webkit-box-sizing: border-box;
//         -moz-box-sizing: border-box;
//         box-sizing: border-box;
//     }

//     a {
//         color:inherit;
//         background-color: transparent;
//         text-decoration:none;
//         cursor: pointer;
//         &:hover, &:active {
//             color:inherit;
//             outline: 0;
//         }
//     }

//     button,input,textarea {
//         color: inherit;
//         font: inherit;
//         margin: 0;
//     }

//     button, input[type='button'] {
//         cursor: pointer;
//     }

//     input, input:focus {
//         outline: 0;
//     }
// `

const store = configureStore()

render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('root')
)

// mixpanel.track("Page Load")