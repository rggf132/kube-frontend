import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers/index';
import { rootSaga } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState={}) {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(sagaMiddleware)
        )
    );

    sagaMiddleware.run(rootSaga)

    return store
}