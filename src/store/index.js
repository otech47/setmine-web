import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

// const logger = createLogger();

// redux devtools setup
const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument(),
    persistState(
        window.location.href.match(
            /[?&]debug_session=([^&#]+)\b/
        )
    )
);

// let middleware = [thunk];
// if(process.env.NODE_ENV !== 'production') {
//     middleware = [...middleware, logger];
// }

// const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configureStore(initialState) {
    // const store = createStoreWithMiddleware(rootReducer, initialState);
    const store = createStore(rootReducer, initialState, enhancer);

    if(module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(require('../reducers').default)
        });
    }
    
    return store;
}