/* global DHIS_CONFIG, manifest */

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import UI from 'ui/core/UI'

import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import { store } from './configureStore'
import { init as d2Init, config, getUserSettings } from 'd2'
import i18n from './locales'

const configI18n = async userSettings => {
    const uiLocale = userSettings.keyUiLocale

    if (uiLocale && uiLocale !== 'en') {
        config.i18n.sources.add(`./i18n/i18n_module_${uiLocale}.properties`)
    }

    config.i18n.sources.add('./i18n/i18n_module_en.properties')
    i18n.changeLanguage(uiLocale)
}

const rootElement = document.querySelector('#root')

const renderApp = (baseUrl, d2, userSettings) => {
    const props = { baseUrl, d2, userSettings }
    ReactDOM.render(
        <Provider store={store}>
            <UI theme="blue">
                <App {...props} />
            </UI>
        </Provider>,
        rootElement
    )
    serviceWorker.register()
}

const initializeApp = async () => {
    console.info(
        `Tracker Report App, v${manifest.version}, ${
            manifest.manifest_generated_at
        }`
    )
    const isProd = process.env.NODE_ENV === 'production'
    const baseUrl = isProd ? manifest.activities.dhis.href : DHIS_CONFIG.baseUrl
    config.baseUrl = `${baseUrl}/api/${manifest.dhis2.apiVersion}`
    config.headers = isProd
        ? null
        : { Authorization: DHIS_CONFIG.authorization }
    const userSettings = await getUserSettings()
    await configI18n(userSettings)

    const d2 = await d2Init({
        baseUrl: config.baseUrl,
    })

    renderApp(baseUrl, d2, userSettings)
}
initializeApp()
