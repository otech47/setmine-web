import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store';

// styling
import './styles/index.less';

const store = configureStore();
const rootEl = document.getElementById('root');

render(
    <Provider store={store}>
        {routes}
    </Provider>
, rootEl);

mixpanel.track("Page Load");