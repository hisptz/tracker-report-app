import { applyMiddleware, createStore, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpic } from './epics'
import { rootReducer } from './reducers'

const epicMiddleware = createEpicMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
    applyMiddleware(epicMiddleware)
    // other store enhancers if any
)

/**
 * The redux state store, built with the Epic middleware.
 */
export const store = createStore(rootReducer, enhancer)
epicMiddleware.run(rootEpic)
