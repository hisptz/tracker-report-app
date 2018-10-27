import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startupDataLoad } from '../actions'
import CircularProgress from 'ui/core/CircularProgress'
import i18n from '@dhis2/d2-i18n'
import './App.css'
import PropTypes from 'prop-types'
import { HeaderBarContainer } from './HeaderBar'
import { getProps } from '../helpers/helper.constants'

class App extends Component {
    componentDidMount = async () => {
        const { store } = this.context

        // const { startupDataLoad } = this.props
        store.dispatch(startupDataLoad())
    }

    getChildContext() {
        return {
            baseUrl: this.props.baseUrl,
            i18n,
            d2: this.props.d2,
        }
    }

    render() {
        const { loaded } = this.props
        const circularProps = {
            overlay: true,
            size: 'large',
        }
        return (
            <div className="App">
                {loaded ? (
                    <HeaderBarContainer {...getProps()} />
                ) : (
                    <CircularProgress {...circularProps} />
                )}
            </div>
        )
    }
}

App.contextTypes = {
    store: PropTypes.object,
}

App.childContextTypes = {
    d2: PropTypes.object,
    baseUrl: PropTypes.string,
    i18n: PropTypes.object,
}

App.propTypes = {
    d2: PropTypes.object,
    baseUrl: PropTypes.string,
    location: PropTypes.object,
    startupDataLoad: PropTypes.func,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
}

const mapStateToProps = ({ init }) => ({
    ...init,
})
const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
