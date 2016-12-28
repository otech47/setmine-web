import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'
import routes from './routes'

const isProduction = process.env.NODE_ENV === 'production'
const history = isProduction ? browserHistory : hashHistory
// history.listen(location => mixpanel.track(location.pathname))

// styling
import './styles/index.less'

const store = configureStore()

render(
    <Provider store={store}>
        <Router routes={routes} history={history} />
    </Provider>,
    document.getElementById('root')
)

// mixpanel.track("Page Load")