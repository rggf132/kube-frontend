import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState={}) {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );
}