import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UI from 'ui/core/UI'

import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import { store } from './configureStore'

const rootElement = document.querySelector('#root')

if (rootElement) {
    ReactDOM.render(
        <Provider store={store}>
            <UI theme="blue">
                <App />
            </UI>
        </Provider>,
        rootElement
    )
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.register()
}
